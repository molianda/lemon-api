/*
 * @Author: 田佳茹 
 * @Date: 2018-12-07 19:11:21 
 * @Last Modified by: 田佳茹
 * @Last Modified time: 2018-12-11 14:01:06
 */
var mysql = require('mysql');
var opt = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'lemon',
    conectionLimit: 100
}
var pool = mysql.createPool(opt);
module.exports = function(sql, arr, fn) {
    fn = fn ? fn : arr;
    arr = arr || [];
    pool.getConnection(function(err, con) {
        if (err) {
            fn(err);
        } else {
            con.query(sql, arr, function(err, result) {
                if (err) {
                    fn(err);
                } else {
                    fn(null, result);
                }
                con.release();
            });
        }
    })
}