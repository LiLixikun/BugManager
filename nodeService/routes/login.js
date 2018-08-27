var express = require('express');
var router = express.Router();
var url = require('url');
var db = require("../mysqlConfig");
/* GET home page. */
router.get('/', function (req, res, next) {
    // 解析 url 参数
    var params = url.parse(req.url, true).query;

    db.query('SELECT * FROM t_user', [], function (results, fields) {

        res.writeHeader(200, { "Content-Type": "text/html;charset=utf-8" });
        res.end(JSON.stringify(results))
    })
    //res.render('login', { title: '登陆' });
});

module.exports = router;
