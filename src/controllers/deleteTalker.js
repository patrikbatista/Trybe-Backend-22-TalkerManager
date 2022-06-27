const services = require('../services');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const talker = await services.getTalkerId(id);
  if (!talker) return res.status(500).json({ message: 'Não é possível deletar esse talker!' });

  const talkers = await services.getTalkers();
  const talkerIndex = talkers.findIndex((s) => s.id === +id);
  talkers.splice(talkerIndex, 1);
  await services.writeTalk(talkers);
  res.status(204).end();
};