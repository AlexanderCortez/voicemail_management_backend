require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const responses = require('../middleware/responses');

const app = express();

const { NODE_ENV } = process.env;

if (NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(responses);

module.exports = app;
