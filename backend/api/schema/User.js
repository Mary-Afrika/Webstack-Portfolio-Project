// models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  progress: {
    type: Map,
    of: Number, // Progress for each lesson
    default: {},
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
