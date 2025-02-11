const express = require('express');
const helmet = require('helmet');
const session = require('cookie-session');
const rateLimit = require('express-rate-limit');

const app = express();

app.use(helmet());

app.disable('x-powered-by');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use(limiter);

app.use(session({
  name: 'session', 
  keys: ['key1', 'key2'], 
  cookie: {
    secure: true, 
    httpOnly: true, 
    maxAge: 60 * 60 * 1000 
  }
}));

app.post('/login', (req, res) => {
  req.session.user = { id: 1, username: 'user' };
  res.send('Logged in!');
});

app.get('/', (req, res) => {
  if (!req.session.user) {
    return res.status(401).send('Please log in first.');
  }
  res.send(`Hello, ${req.session.user.username}`);
});

app.use((req, res) => {
  res.status(404).send("Sorry, we couldn't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
