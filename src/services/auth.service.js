const User = require('../models/usermodel');
const jwt = require('jsonwebtoken');

const loginService = (email) => {
  console.log(email);
  return User.findOne({ email: email }).select('+password');
};

const generateToken = (Id) =>
  jwt.sign({ id: Id }, process.env.SECRET, { expiresIn: 86400 });

module.exports = { loginService, generateToken };
