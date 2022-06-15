const tokenGenarate = require('../utils/tokenGenerate');

module.exports = (req, res) => {
  const token = tokenGenarate();
  return res.status(200).json(token);
};