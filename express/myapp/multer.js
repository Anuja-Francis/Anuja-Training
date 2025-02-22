const express = require('express');
const multer = require('multer');

const upload = multer({ dest: './assets/' });
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <form action="/profile" method="post" enctype="multipart/form-data">
      <input type="file" name="narwhal" />
      <button type="submit">Upload</button>
    </form>
  `);
});

app.post('/profile', upload.single('narwhal'), (req, res) => {
  console.log(req.file); 
  console.log(req.body); 
  res.send('File uploaded successfully!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
