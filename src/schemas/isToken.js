module.exports = (token) => {
  if (!token) {
    return { data: 'Token não encontrado',
    response: false,  
  }; 
  }
  if (token.length < 16) {
    return { 
      data: 'Token inválido', 
      response: false,  
    };
  }
  return true;
};