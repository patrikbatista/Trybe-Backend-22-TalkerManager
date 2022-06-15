const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { email } = req.body;
  const isEmail = schemas.isEmail(email);

  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }

  if (!isEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  return next();
};