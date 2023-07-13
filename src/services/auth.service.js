const User = require('../models/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginService = async (email, password) => {
  try {
    const user = await User.findOne({ email: email }).select('+password');
    
    if (!user) {
      throw new Error('User not found');
    }
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      throw new Error('Invalid password');
    }
    
    user.password = undefined;
    return user;
  } catch (error) {
    console.error(error);
    throw new Error(`Error logging in: ${error.message}`);
  }
};

const generateToken = (Id) =>
  jwt.sign({ id: Id }, process.env.SECRET, { expiresIn: 86400 });

module.exports = { loginService, generateToken };

