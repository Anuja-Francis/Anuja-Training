const express = require('express');
const debug = require('debug')('app');  
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  debug('Home route accessed');  
  res.send('Hello, Express!');
});

app.listen(port, () => {
  debug(`Server is running on http://localhost:${port}`);  
});
