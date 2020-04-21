const app = require('./config/express');

const { PORT } = process.env;

app.listen(PORT || 3001, (err) => {
  if (err) {
    console.error('# Error starting server #', err);
  } else {
    console.info('Listening on port:', PORT || 3001);
  }
});
