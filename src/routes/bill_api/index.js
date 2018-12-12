var query = require('../../mysql/query.js');
var sql = require('../../mysql/sql.js');
var uuid = require('node-uuid');
var addbill = function(req, res, next) {
    var uid = req.body.uid;
    var cid = req.body.cid;
    var money = req.body.money;
    if (!uid || !cid || !money) {
        res.json({ code: 4, msg: '缺少参数' });
    } else {
        var lid = uuid.v1();
        query(sql.ADD_BILL, [lid, uid, cid, new Date().toLocaleString(), money], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                res.json({ code: 1, msg: '添加成功' })
            }
        })
    }
}
var getbill = function(req, res, next) {
    var uid = req.query.uid;
    var timer = req.query.timer;
    var time_type = req.query.time_type;
    var test = req.query.test || '';
    var arr = [];

    if (!uid || !timer) {
        res.json({ code: 4, msg: '缺少参数' });
    } else {
        var sqlurl;
        if (test) {
            test = JSON.parse(test);
            test.forEach(function(item) {
                arr.push(decodeURI(item));
            });
            sqlurl = time_type == 1 ? sql.SELECT_YEAR_CBILL : sql.SELECT_MONTH_CBILL;
        } else {
            sqlurl = time_type == 1 ? sql.SELECT_YEAR_BILL : sql.SELECT_MONTH_BILL;
        }
        query(sqlurl, [uid, timer, arr], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                res.json({ code: 1, msg: '查找成功', data: result })
            }
        })
    }
}
var deletebill = function(req, res, next) {
    var lid = req.query.lid;
    if (!lid) {
        res.json({ code: 4, msg: '缺少参数' });
    } else {
        query(sql.DELETE_BILL, [lid], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                res.json({ code: 1, msg: '删除成功' })
            }
        })
    }
}
module.exports = {
    addbill: addbill,
    getbill: getbill,
    deletebill: deletebill
}