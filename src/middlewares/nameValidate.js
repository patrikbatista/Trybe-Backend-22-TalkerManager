const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { name } = req.body;

  const validatedName = schemas.isName(name);

  if (!validatedName) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  
  if (name.length) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};