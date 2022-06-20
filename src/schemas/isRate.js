module.exports = (rate) => {
  if (!rate) {
    return { 
      status: 400,
      data: 'O campo "rate" deve ser um inteiro de 1 à 5',
      response: false,  
  }; 
  }
  if (typeof rate !== 'number') {
    return { 
      status: 400,
      data: 'O campo "rate" deve ser um inteiro de 1 à 5', 
      response: false,  
    };
  }
  return true;
};