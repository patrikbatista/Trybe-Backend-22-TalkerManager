module.exports = (talkers) => {
  if (talkers.length === 0) {
    return { 
      status: 200, 
      message: 'ok', 
      response: false, 
    };
  }
  return { 
    status: 200, 
    message: 'ok', 
    response: true, 
  };
};