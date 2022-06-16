const services = require('../services');

module.exports = (req, res) => {
  const { id } = req.params;
  const talker = services.getTalkerId(id);
  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talker);
};
