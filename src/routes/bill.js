var express = require('express');
var router = express.Router();
var billapi = require('./bill_api');
/* GET home page. */
//添加账单
router.post('/api/addbill', billapi.addbill);
//查询账单
router.get('/api/getbill', billapi.getbill);
//删除账单
router.get('/api/deletebill', billapi.deletebill);

module.exports = router;