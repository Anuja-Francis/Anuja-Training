const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  age: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;
