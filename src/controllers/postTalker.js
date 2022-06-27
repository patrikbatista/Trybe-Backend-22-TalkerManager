const services = require('../services');

module.exports = async (req, res) => {
  const talkers = await services.getTalkers();
  const { name, age, talk } = req.body;
  const id = talkers.length + 1; 

  const newTalk = {                                   
    id, 
    name, 
    age, 
    talk,
  };
  talkers.push(newTalk);
  await services.writeTalk(talkers);
  res.status(201).json(newTalk);
};