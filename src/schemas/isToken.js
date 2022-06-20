module.exports = (token) => {
  if (!token) {
    return { 
      status: 401,
      data: 'Token não encontrado',
      response: false,  
  }; 
  }
  if (token.length < 16) {
    return {
      status: 401,
      data: 'Token inválido', 
      response: false,  
    };
  }
  return true;
};