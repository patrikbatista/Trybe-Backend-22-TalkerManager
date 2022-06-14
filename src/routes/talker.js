const { Router } = require('express');
// const rescue = require('express-rescue');

const talker = Router();
talker.post('/', (req, res, _next) => res.end());
talker.get('/', (req, res, _next) => res.end());
talker.get('/id', (req, res, _next) => res.end());
talker.put('/id', (req, res, _next) => res.end());
talker.delete('/id', (req, res, _next) => res.end());

module.exports = talker;