const fs = require('fs/promises');
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
  await fs.writeFile('./talker.json', JSON.stringify(talkers));
  console.log(talkers);
  res.status(201).json(newTalk);
};