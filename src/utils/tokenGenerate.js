const crypto = require('crypto');

module.exports = () => {
  const string = crypto.randomBytes(8).toString('hex');
  return string;
};