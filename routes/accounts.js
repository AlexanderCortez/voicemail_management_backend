const router = require('express').Router();
const account = require('../controllers/accounts');

router.get('/messages', account.getByVmBoxId);
router.patch('/messages/:messageId/changeStatus', account.changeStatus);

module.exports = router;
