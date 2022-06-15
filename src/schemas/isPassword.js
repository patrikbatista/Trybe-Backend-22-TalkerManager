module.exports = (password) => {
  if (password === null || password.length < 6) {
    return false;
  }
  return true;
};