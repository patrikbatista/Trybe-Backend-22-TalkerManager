const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { email } = req.body;
  
  if (email === undefined) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  const isEmail = schemas.isEmail(email);

  if (!isEmail) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  return next();
};