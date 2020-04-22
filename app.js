const path = require('path');
const express = require('express');

const app = require('./config/express');

app.use(express.static(path.join(__dirname, 'client')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/index.html`));
});

const { PORT } = process.env;

app.listen(PORT || 3001, (err) => {
  if (err) {
    console.error('# Error starting server #', err);
  } else {
    console.info('Listening on port:', PORT || 3001);
  }
});
