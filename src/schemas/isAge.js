module.exports = (age) => {
  if (!age) {
    return { 
      status: 400,
      data: 'O campo "age" é obrigatório',
      response: false,  
  }; 
  }
  if (age.length < 18) {
    return { 
      status: 400,
      data: 'A pessoa palestrante deve ser maior de idade', 
      response: false,  
    };
  }
  return true;
};