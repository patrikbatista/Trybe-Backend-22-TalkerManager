module.exports = (rate) => {
  if (!Number.isInteger(rate) || (Number(rate) < 1) || (Number(rate) > 5)) {
    return false; 
  }
  return true;
};