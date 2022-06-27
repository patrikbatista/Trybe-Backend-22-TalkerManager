const services = require('../services');

module.exports = async (req, res, _next) => {
  const { q } = req.query;
  const talkers = await services.getTalkers();
  const filteredTalkers = talkers.filter((r) => r.name.includes(q));

  if (filteredTalkers === undefined) {
 return res
  .status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
}
  res.status(200).json(filteredTalkers);
}; 