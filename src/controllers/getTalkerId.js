const services = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  const talker = await services.getTalkerId(id);
  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  return res.status(200).json(talker);
};
