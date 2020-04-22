require('dotenv').config();
const express = require('express');
const { agent } = require('superagent');
const superagentAbsolute = require('superagent-absolute');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const responses = require('../middleware/responses');
const apiRoutes = require('../routes');
const config = require('.');

const { NODE_ENV } = process.env;

global.superagent = superagentAbsolute(agent())(config.serverUrl);

const app = express();

if (NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(responses);
app.use('/api', apiRoutes);

console.info('Environment:', NODE_ENV);

module.exports = app;
