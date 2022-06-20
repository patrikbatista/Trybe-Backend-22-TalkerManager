module.exports = (req, res, next) => {
  const { talk } = req.body;
  
    if (!talk) {
      return res.status(400)
      .json({ 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    const { watchedAt, rate } = talk;
    if (watchedAt === undefined || rate === undefined) {
      return res.status(400)
      .json({ 
        message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    next();
  };