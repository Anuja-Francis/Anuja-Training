// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((req,res) => {
//     res.write('hello !')
//     console.log(req.url)
//     console.log('test')
//     res.end()
// })

// // server.listen(3000,() => console.log("server is running"))
// const PORT = process.env.PORT || 3001
// server.listen(PORT, () => console.log(`Server running on ${PORT}`))

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello World!');
  } else if (req.url === '/about') {
    res.write('About Page');
  } else {
    res.write('Page not found');
  }
  res.end();
});

server.listen(3000, () => console.log("server is running"));
