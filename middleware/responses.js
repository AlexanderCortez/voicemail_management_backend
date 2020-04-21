module.exports = (req, res, next) => {
  const { NODE_ENV } = process.env;
  const showInConsole = NODE_ENV !== 'test';
  res.sendJSONSuccess = (content) => {
    const data = content || {
      message: 'Success',
    };

    return res.send(data);
  };

  res.sendJSONError = (msg, rootMessage = false) => {
    const message = msg || 'Server error';
    if (showInConsole) {
      console.error('API', '500 - Error:', msg);
    }
    return res
      .status(500)
      .send(!rootMessage ? { message } : message);
  };

  res.sendJSONInvalid = (msg) => {
    const message = msg || 'Invalid request';
    if (showInConsole) {
      console.warn('API', '400 - Invalid:', msg || '', res.headersSent);
    }
    return res
      .status(400)
      .send({
        message,
      });
  };

  res.sendJSONNotFound = (msg) => {
    const message = msg || 'Not found';
    if (showInConsole) {
      console.warn('API', '404 - Not found:', msg || '');
    }
    return res
      .status(404)
      .send({
        message,
      });
  };

  res.sendJSONForbidden = (msg) => {
    const offender = req.user ? `user: ${req.user.id}` : '';
    if (showInConsole) {
      console.info('API', '403 - Forbidden', req.path, offender);
    }
    const message = msg || 'User forbidden';
    return res
      .status(403)
      .send({
        message,
      });
  };

  next();
};
