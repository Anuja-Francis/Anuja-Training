const express = require('express');
const compression = require('compression');
const winston = require('winston');
const cluster = require('cluster');
const os = require('os');
const redis = require('redis');
const fs = require('fs');
const path = require('path');

const numCPUs = os.cpus().length;

const client = redis.createClient();

const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

const app = express();

app.use(compression());

app.use((req, res, next) => {
  logger.info(`Request made to: ${req.originalUrl}`);
  next();
});

app.get('/data', (req, res, next) => {
  
  client.get('data', (err, cachedData) => {
    if (err) return next(err);

    if (cachedData) {
      logger.info('Cache hit');
      return res.json(JSON.parse(cachedData));
    }

    const data = { message: 'Data fetched from database' };
    client.setex('data', 3600, JSON.stringify(data)); 
    logger.info('Cache miss, fetching data');
    res.json(data);
  });
});

app.get('/file', (req, res, next) => {
  fs.readFile(path.join(__dirname, 'large-file.txt'), 'utf8', (err, data) => {
    if (err) {
      logger.error('Error reading file:', err);
      return next(err);
    }
    res.send(data);
  });
});

app.get('/parse-json', (req, res) => {
  try {
    const jsonStr = req.query.params;
    const jsonObj = JSON.parse(jsonStr); 
    res.send('Valid JSON');
  } catch (err) {
    logger.error('Invalid JSON:', err);
    res.status(400).send('Invalid JSON');
  }
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use((err, req, res, next) => {
  logger.error('Unhandled Error:', err);
  res.status(500).send('Something went wrong!');
});

if (cluster.isMaster) {
  logger.info('Master process started');

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    logger.info(`Worker ${worker.process.pid} died`);
  });
} else {
  app.listen(3000, () => {
    logger.info('Server is running on port 3000');
  });
}

