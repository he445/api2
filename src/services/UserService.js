const User = require('../models/usermodel.js');

const createUsersService = async (body) => {
  return await User.create(body);
};

const getAllUsersService = async () => {
  return await User.find();
};

const findByUsername = async (username) => {
  return await User.findOne({ username: username });
};
const findByEmail = async (email) => {
  return await User.findOne({ email: email });
};

module.exports = {
  createUsersService,
  getAllUsersService,
  findByUsername,
  findByEmail,
};
