const { Router } = require('express');

const controller = require('../controllers');
const middlewares = require('../middlewares');

const talker = Router();
talker.get('/', controller.getAllTalkers);
talker.get('/:id', controller.getTalkerId);
talker.get('/talker/search', 
middlewares.tokenValidate,
controller.getTalkerSearch);
talker.delete('/:id', 
middlewares.tokenValidate,
controller.deleteTalker);
talker.use(
  middlewares.tokenValidate,
  middlewares.nameValidate,
  middlewares.ageValidate,
  middlewares.talkValidate,
  middlewares.watchedAtValidate,
  middlewares.rateValidate, 
);

talker.post('/', controller.postTalker);
talker.put('/:id', controller.postTalkerId);

module.exports = talker;