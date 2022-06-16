const models = require('../models');

module.exports = (id) => {
  const talkers = models.getTalkers();
  const talker = talkers.find((t) => t.id === id);
  return talker;
};