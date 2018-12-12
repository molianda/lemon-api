var query = require('../../mysql/query');
var sql = require('../../mysql/sql');
var uuid = require('node-uuid');
var adduser = function(req, res, next) {
    var uid = uuid.v1();
    var nick_name = req.body.nick_name || null;
    query(sql.ADD_USER, [uid, nick_name], function(err, result) {
        if (err) {
            res.json({ code: 0, msg: err });
        } else {
            res.json({ code: 1, msg: '添加成功', uid: uid })
        }
    })
}
module.exports = {
    adduser: adduser
}