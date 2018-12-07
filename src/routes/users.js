var express = require('express');
var router = express.Router();
var userapi = require('./user');
/* GET users listing. */
router.get('/api/userlist', userapi.selectuser);

module.exports = router;