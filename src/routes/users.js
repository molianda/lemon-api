var express = require('express');
var router = express.Router();
var userapi = require('./user-api');
/* GET users listing. */
router.post('/api/adduser', userapi.adduser);

module.exports = router;