const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { password } = req.body;
  const isPassword = schemas.isEmail(password);

  if (!isPassword) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  if (password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }

  next();
};