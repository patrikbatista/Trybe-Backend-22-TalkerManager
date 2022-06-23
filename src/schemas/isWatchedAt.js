const validator = require('is-my-date-valid');

module.exports = (watchedAt) => {
  const validate = validator({ format: 'DD/MM/YYYY' });
  if (!validate(watchedAt)) {
    return false;
  }
  return true;
};