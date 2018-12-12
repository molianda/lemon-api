var query = require('../../mysql/query.js');
var sql = require('../../mysql/sql.js');
var uuid = require('node-uuid');
var selecticon = function(req, res, next) {
    query(sql.SELECT_ICON, function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err });
        } else {
            res.json({ code: 1, msg: '查找成功', data: result });
        }
    })
}
var addclassify = function(req, res, next) {
    var c_name = req.body.c_name;
    var c_icon = req.body.c_icon;
    var type = req.body.type;
    var uid = req.body.uid;
    if (!c_name || !c_icon || !type || !uid) {
        res.json({ code: 4, msg: '缺少参数' });
    } else {
        ishasclassify();
    }

    function ishasclassify() {
        query(sql.ISHAS_CLASSIFY, [uid, c_name, type], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                if (result.length) {
                    res.json({ code: 3, msg: '此分类已存在' });
                } else {
                    addclassify();
                }
            }
        })
    }

    function addclassify() {
        var cid = uuid.v1();
        query(sql.ADD_CLASSIFY, [cid, c_name, c_icon, type, uid], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                res.json({ code: 1, msg: '添加成功' });
            }
        });
    }
}
var getclassify = function(req, res, next) {
    var uid = req.query.uid;
    if (!uid) {
        res.json({ code: 4, msg: '缺少参数' });
    } else {
        query(sql.SELECT_ALL_C, [uid], function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                res.json({ code: 1, msg: '查找成功', data: result });
            }
        })
    }
}
module.exports = {
    selecticon: selecticon,
    addclassify: addclassify,
    getclassify: getclassify
}