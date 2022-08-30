const bcrypt = require('bcryptjs');
require('dotenv').config();
const authService = require('../services/auth.service');

loginController = async (req, res) => {
  const { email, password } = req.body;

  const User = await authService.loginService(email);

  if (!User) {
    return res.status(400).send({
      message: 'Usuário não encontrado na base de dados. Tente novamente...',
    });
  }
  console.log('aoba', password, User.password);
  const isPasswordValid = bcrypt.compareSync(password, User.password);
  console.log('aoba', password, User.password);

  if (!isPasswordValid) {
    return res
      .status(400)
      .send({ message: 'Senha inválida! Digite novamente...' });
  }
  const token = authService.generateToken(User.id);
  res.send({ token });
};

module.exports = {
  loginController,
};
