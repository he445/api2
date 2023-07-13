const bcrypt = require('bcryptjs');
require('dotenv').config();
const authService = require('../services/auth.service');

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authService.loginService(email);

    if (!user) {
      return res.status(404).send({
        message: 'User not found in the database. Please try again...',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).send({ message: 'Invalid password! Please try again...' });
    }

    const token = authService.generateToken(user.id);
    res.send({ token });
  } catch (err) {
    res.status(500).send({ message: `Error logging in: ${err.message}` });
  }
};

module.exports = {
  loginController,
};
