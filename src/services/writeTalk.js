const models = require('../models');

module.exports = async (talker) => {
  const talkers = await models.postTalker(talker);
  return talkers;
};