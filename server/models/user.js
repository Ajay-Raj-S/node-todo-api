const mongoose = require('mongoose');

let User = mongoose.model('User', {
  email: {
    required: true,
    type: String,
    trim: true,
    minlength: 1
  }
});

module.exports = {
  User
};