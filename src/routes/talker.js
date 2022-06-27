const { Router } = require('express');

const controller = require('../controllers');
const middlewares = require('../middlewares');

const talker = Router();
talker.get('/', controller.getAllTalkers);
talker.get('/search',
middlewares.tokenValidate, 
controller.getTalkerSearch);
talker.get('/:id', controller.getTalkerId);

talker.use(middlewares.tokenValidate);

talker.delete('/:id', 
controller.deleteTalker);

talker.use(
  middlewares.nameValidate,
  middlewares.ageValidate,
  middlewares.talkValidate,
  middlewares.watchedAtValidate,
  middlewares.rateValidate, 
);

talker.post('/', controller.postTalker);
talker.put('/:id', controller.postTalkerId);

module.exports = talker;