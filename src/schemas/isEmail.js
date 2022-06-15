const validator = require('validator');

module.exports = (email) => {
  const verifyEmail = validator.isEmail(email);
  return verifyEmail;
};