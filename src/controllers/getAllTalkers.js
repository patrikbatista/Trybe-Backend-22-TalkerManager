const services = require('../services');
const schemas = require('../schemas');

module.exports = async (req, res) => {
  const talkers = await services.getTalkers();
  console.log(talkers);
  const result = schemas.allTalkers(talkers);
  
  return res.status(200).json(result.data);
};