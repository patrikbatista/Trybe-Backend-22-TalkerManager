const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { password } = req.body;
  
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  
  const isPassword = schemas.isPassword(password);

  if (!isPassword) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }

  next();
};