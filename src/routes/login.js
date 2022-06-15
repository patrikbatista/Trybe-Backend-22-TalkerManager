const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const login = Router();
login.post('/', 
  middlewares.emailValidate,
  middlewares.passwordValidate,
  controllers.login);

module.exports = login;