module.exports = (age) => {
  if (!age) {
    return { 
      data: 'O campo "age" é obrigatório',
      response: false,  
  }; 
  }
  if (age.length < 18) {
    return { 
      data: 'A pessoa palestrante deve ser maior de idade', 
      response: false,  
    };
  }
  return true;
};