const config = require('../config');

const getMessages = (req, res) => {
  const vmboxIdParam = config.vmBoxId;
  superagent
    .get(`/accounts/${config.accountId}/vmboxes/${vmboxIdParam}/messages`)
    .set('Authorization', `Basic ${config.credentials}`)
    .then((response) => {
      res.sendJSONSuccess(response.body);
    })
    .catch((err) => {
      res.sendJSONError(err);
    });
};

const changeStatus = (req, res) => {
  const { messageId } = req.params;
  const { status } = req.body;
  const validStatus = ['new', 'deleted', 'saved'];
  if (!status || !validStatus.includes(status)) {
    return res.sendJSONInvalid('Please, provide a valid status');
  }
  const vmboxIdParam = config.vmBoxId;
  return superagent
    .post(`/accounts/${config.accountId}/vmboxes/${vmboxIdParam}/messages/${messageId}`)
    .set('Authorization', `Basic ${config.credentials}`)
    .send({ data: { folder: status } })
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
};
