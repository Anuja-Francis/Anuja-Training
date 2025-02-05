const { URL } = require('url'); 

const myUrl = new URL('https://localhost:3000/index.html?name=anuja&age=25#hash');

const part = myUrl.searchParams;
console.log(part.get('name'))
console.log(part.get())