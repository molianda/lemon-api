var express = require('express');
var router = express.Router();
var classifyapi = require('./classify_api');
/* GET users listing. */
//查询所有图标
router.get('/api/selecticon', classifyapi.selecticon);
//添加分类
router.post('/api/addclassify', classifyapi.addclassify);
//获取一个人的所有分类
router.get('/api/getclassify', classifyapi.getclassify);
module.exports = router;