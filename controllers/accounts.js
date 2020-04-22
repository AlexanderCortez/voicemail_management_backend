const config = require('../config');

const getMessages = (req, res) => {
  const { vmboxId } = req.query;
  const vmboxIdParam = vmboxId || config.vmBoxId;
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

module.exports = {
  getByVmBoxId: getMessages,
};
