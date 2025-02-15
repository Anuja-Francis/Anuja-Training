const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//    res.send('Welcome to the User Management API');
// });

// mongoose.connect(process.env.MONGODB_URI)
mongoose.connect('mongodb://localhost:27017/users')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

const userRoutes = require('./routes/userRoutes');
const { db } = require('./models/user');

app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.render('index'); 
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
