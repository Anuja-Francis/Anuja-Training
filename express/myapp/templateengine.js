const express = require('express')
const fs = require('fs') 
const app = express()
app.engine('ntl', (filePath, options, callback) => { 
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    const rendered = content.toString()
      .replace('#title#', `<title>${options.title}</title>`)
      .replace('#message#', `<h1>${options.message}</h1>`)
    return callback(null, rendered)
  })
})
app.set('views', './views') 
app.set('view engine', 'ntl')

app.get('/', (req, res) => {
  res.render('./index', { title: 'My Custom Template', message: 'Hello, World!' });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});