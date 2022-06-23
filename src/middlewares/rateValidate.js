const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;

  if (!rate) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' }); 
}

  const validatedRate = schemas.isRate(rate);

  if (!validatedRate) {
    return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};