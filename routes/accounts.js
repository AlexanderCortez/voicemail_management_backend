const router = require('express').Router();
const account = require('../controllers/accounts');

router.get('/vmboxes/:vmBoxId/messages', account.getByVmBoxId);
router.patch('/vmboxes/:vmBoxId/messages/:messageId/changeStatus', account.changeStatus);
router.get('/vmboxes', account.getVmBoxes);

module.exports = router;
