const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;

  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' }); 
}

  const validateWatchedAt = schemas.isWatchedAt(watchedAt);

  if (!validateWatchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};