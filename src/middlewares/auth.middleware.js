require('dotenv').config();
const jwt = require('jsonwebtoken');
const { findByIdUserService } = require('../services/UserService.js');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'No token provided!' });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2) {
    return res.status(401).send({ message: 'Token error!' });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).send({ message: 'Malformatted token!' });
  }

  jwt.verify(token, process.env.SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: `Token invalid: ${err.message}` });
    }

    const user = await findByIdUserService(decoded.id);

    if (!user) {
      return res.status(401).send({ message: 'User no longer exists!' });
    }

    req.userId = user.id;

    return next();
  });
};
