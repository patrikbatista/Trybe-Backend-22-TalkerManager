const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { name } = req.body;

  const validatedName = schemas.isName(name);

  if (!validatedName.response) {
    return res.status(validatedName.status).json({ message: validatedName.data });
  }

  next();
};