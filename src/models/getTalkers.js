const fs = require('fs/promises');

module.exports = async () => {
  const dataTalkers = await fs.readFile('./talker.json');
  const talkers = JSON.parse(dataTalkers);
  return talkers;
};