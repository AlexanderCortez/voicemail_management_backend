const config = require('../config');

const getMessages = (req, res) => {
  const { vmBoxId } = req.params;
  superagent
    .get(`/accounts/${config.accountId}/vmboxes/${vmBoxId}/messages`)
    .set('Authorization', `Basic ${config.credentials}`)
    .then((response) => {
      res.sendJSONSuccess(response.body);
    })
    .catch((err) => {
      res.sendJSONError(err);
    });
};

const changeStatus = (req, res) => {
  const { messageId, vmBoxId } = req.params;
  const { status } = req.body;
  const validStatus = ['new', 'deleted', 'saved'];
  if (!status || !validStatus.includes(status)) {
    return res.sendJSONInvalid('Please, provide a valid status');
  }
  return superagent
    .post(`/accounts/${config.accountId}/vmboxes/${vmBoxId}/messages/${messageId}`)
    .set('Authorization', `Basic ${config.credentials}`)
    .send({ data: { folder: status } })
    .then((response) => {
      res.sendJSONSuccess(response.body);
    })
    .catch((err) => {
      res.sendJSONError(err);
    });
};

const getVmBoxes = (req, res) => {
  superagent
    .get(`/accounts/${config.accountId}/vmboxes`)
    .set('Authorization', `Basic ${config.credentials}`)
    .then((response) => {
      res.sendJSONSuccess(response.body);
    })
    .catch((err) => {
      res.sendJSONError(err);
    });
};

module.exports = {
  getByVmBoxId: getMessages,
  changeStatus,
  getVmBoxes,
};
