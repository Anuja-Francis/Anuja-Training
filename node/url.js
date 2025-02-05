const url = require('url')
var webaddress = "https://localhost:3000/index.html?name=anuja&age=25#hash"

var part = url.parse(webaddress,true)
console.log(part.host)
console.log(part.port)
console.log(part.pathname)
console.log(part.search)
console.log(part.query)
console.log(part.query.age)
console.log(part.hash)
console.log(part.href)
console.log(part.protocol)

const myURLs = [
    new URL('https://www.example.com'),
    new URL('https://test.example.org'),
  ];
console.log(JSON.stringify(myURLs));