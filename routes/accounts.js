const router = require('express').Router();
const account = require('../controllers/accounts');

router.get('/messages', account.getByVmBoxId);

module.exports = router;
