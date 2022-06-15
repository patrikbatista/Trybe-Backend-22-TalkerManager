const express = require('express');
const bodyParser = require('body-parser');
require('express-async-errors');

const middlewares = require('./src/middlewares');
const routes = require('./src/routes');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/talker', routes.talker);
app.use('/login', routes.login);
app.use(middlewares.error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
