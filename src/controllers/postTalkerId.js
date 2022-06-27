const services = require('../services');

module.exports = async (req, res, _next) => {
  const { id } = req.params;
  const talker = await services.getTalkerId(id);
  if (!talker) return res.status(500).json({ message: 'Não é possível cadastrar esse talker!' });

  const talkers = await services.getTalkers();
  const talkerIndex = talkers.findIndex((s) => s.id === +id);
  const { name, age, talk } = req.body;
  const newTalk = {
    id: +id,
    name, 
    age,
    talk,
  };
  talkers[talkerIndex] = newTalk;
  await services.writeTalk(talkers);
  res.status(200).json(newTalk);
};