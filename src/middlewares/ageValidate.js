const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { age } = req.body;
  
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  const validatedAge = schemas.isAge(age);
  
  if (!validatedAge) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};