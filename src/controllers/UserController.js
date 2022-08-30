const userService = require('../services/UserService.js');
const bcrypt = require('bcryptjs');

const createUsersController = async (req, res) => {
  try {
    const { name, username, email, password, photo } = req.body;
    const findByEmail = await userService.findByEmail(email);
    const findByUsername = await userService.findByUsername(username);
    const encryptePassword = await bcrypt.hash(password, 10);

    if (findByEmail) {
      res.status(400).send({ message: 'Email already registered' });
    } else if (findByUsername) {
      res.status(400).send({ message: 'Username already registered' });
    } else {
      const created = await userService.createUsersService({
        name,
        username,
        email,
        password: encryptePassword,
        photo,
      });

      if (!created) {
        res.status(400).send({ message: 'Error creating user' });
      } else {
        res.status(201).send(created);
      }
    }
  } catch (err) {
    res.status(400).send({ message: 'Error creating user' });
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
    res.status(404).send({ message: 'Users not found' });
  }
};

module.exports = { createUsersController, getAllUsersController };
