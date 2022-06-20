module.exports = (name) => {
  if (!name) {
    return { 
      status: 400,
      data: 'O campo "name" é obrigatório',
      response: false,  
  }; 
  }
  if (name.length < 3) {
    return { 
      status: 400,
      data: 'O "name" deve ter pelo menos 3 caracteres', 
      response: false,  
    };
  }
  return true;
};
