module.exports = (talkers) => {
  if (talkers.length === 0) {
    return {  
      data: [], 
      response: false, 
    };
  }
  return {  
    data: talkers, 
    response: true, 
  };
};