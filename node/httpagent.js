const http = require('http');

const agent = new http.Agent({ keepAlive: true });

const options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/',
  agent: agent 
};

http.get(options, (res) => {
  res.on('data', (chunk) => {
    console.log(chunk.toString());
  });

  res.on('end', () => {
    console.log('Request completed.');
  });
});
