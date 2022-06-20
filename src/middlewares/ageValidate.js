const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const { age } = req.body;

  const validatedAge = schemas.isAge(age);

  if (!validatedAge.response) {
    return res.status(validatedAge.status).json({ message: validatedAge.data });
  }

  next();
};