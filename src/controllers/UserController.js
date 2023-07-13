const userService = require('../services/UserService.js');
const bcrypt = require('bcryptjs');

const createUsersController = async (req, res) => {
  try {
    const { name, username, email, password, photo } = req.body;

    // Input validation
    if (!(name && username && email && password && photo)) {
      return res.status(400).send({ message: 'All input is required' });
    }

    const encryptePassword = await bcrypt.hash(password, 10);

    const created = await userService.createUsersService({
      name,
      username,
      email,
      password: encryptePassword,
      photo,
    });

    res.status(201).send(created);
  } catch (err) {
    if (err.code === 11000) {
      // This error occurs when a duplicate field was detected
      return res.status(409).send({ message: 'Username or email already registered' });
    }

    res.status(500).send({ message: `Error creating user: ${err.message}` });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const userList = await userService.getAllUsersService();
    
    if (!userList || userList.length === 0) {
      res.status(404).send({ message: 'Users not found' });
    } else {
      res.status(200).send(userList);
    }
  } catch (err) {
    res.status(500).send({ message: `Error getting users: ${err.message}` });
  }
};

module.exports = { createUsersController, getAllUsersController };

