const { Router } = require('express');

const controller = require('../controllers');
const middlewares = require('../middlewares');

const talker = Router();
talker.post('/', 
  middlewares.tokenValidate,
  middlewares.nameValidate,
  middlewares.ageValidate,
  middlewares.talkValidate,
  middlewares.watchedAtValidate,
  middlewares.rateValidate,
  controller.postTalker);
talker.get('/', controller.getAllTalkers);
talker.get('/:id', controller.getTalkerId);
talker.put('/id', (req, res, _next) => res.end());
talker.delete('/id', (req, res, _next) => res.end());

module.exports = talker;