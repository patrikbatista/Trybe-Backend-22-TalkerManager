const { Router } = require('express');

const controller = require('../controllers');
const middlewares = require('../middlewares');

const talker = Router();
talker.get('/', controller.getAllTalkers);
talker.get('/:id', controller.getTalkerId);
talker.delete('/id', (req, res, _next) => res.end());
talker.use(
  middlewares.tokenValidate,
  middlewares.nameValidate,
  middlewares.ageValidate,
  middlewares.talkValidate,
  middlewares.watchedAtValidate,
  middlewares.rateValidate, 
);
talker.post('/', 
  controller.postTalker);
talker.put('/id', 
  controller.postTalkerId);

module.exports = talker;