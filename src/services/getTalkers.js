const models = require('../models');

module.exports = async () => {
  const talkers = await models.getTalkers();
  return talkers;
};