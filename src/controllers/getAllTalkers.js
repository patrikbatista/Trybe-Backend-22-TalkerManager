const services = require('../services');
const schemas = require('../schemas');

module.exports = async (req, res) => {
  const talkers = services.getTalkers();
  const result = schemas.allTalkers(talkers);

  if (!result.response) {
    return res.status(result.status).json([]);
  }
  return res.status(result.status).json(talkers);
};