const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

async function run() {
    const newUser = new User({ name: "Anu", age: 25 });
    await newUser.save();
    console.log(newUser);
}

run();
