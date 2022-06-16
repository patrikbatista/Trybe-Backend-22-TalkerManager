const models = require('../models');

module.exports = async (id) => {
  const talkers = await models.getTalkers();
  const talker = talkers.find((t) => t.id === Number(id));
  return talker;
};