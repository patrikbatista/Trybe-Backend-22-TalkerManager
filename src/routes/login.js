const { Router } = require('express');
// const rescue = require('express-rescue');

const login = Router();
login.post('/', (req, res, _next) => res.end());

module.exports = login;