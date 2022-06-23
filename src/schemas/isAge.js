module.exports = (age) => {
  if (Number(age) < 18) {
    return false;
  }
  return true;
};