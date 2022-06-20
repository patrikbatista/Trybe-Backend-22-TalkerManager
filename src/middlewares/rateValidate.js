const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { rate } = req.body;

  const validatedRate = schemas.isName(rate);

  if (!validatedRate.response) {
    return res.status(validatedRate.status).json({ message: validatedRate.data });
  }

  next();
};