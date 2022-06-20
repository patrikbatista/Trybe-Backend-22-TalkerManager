module.exports = (name) => {
  if (!name) {
    return { data: 'O campo "name" é obrigatório',
    response: false,  
  }; 
  }
  if (name.length < 3) {
    return { 
      data: 'O "name" deve ter pelo menos 3 caracteres', 
      response: false,  
    };
  }
  return true;
};
