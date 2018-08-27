var express = require('express');
var router = express.Router();
var url = require('url');
var svgCaptcha = require('svg-captcha');
var db = require("../mysqlConfig");

function getRanNum() {
  var result = [];
  for (var i = 0; i < 4; i++) {
    var ranNum = Math.ceil(Math.random() * 25); //生成一个0到25的数字
    //大写字母'A'的ASCII是65,A~Z的ASCII码就是65 + 0~25;然后调用String.fromCharCode()传入ASCII值返回相应的字符并push进数组里
    result.push(String.fromCharCode(65 + ranNum));
  }
  return result.join('');
}
router.get('/captcha', function (req, res, neex) {
  var codeConfig = {
    size: 4,// 验证码长度
    ignoreChars: '0o1i', // 验证码字符中排除 0o1i
    noise: 1, // 干扰线条的数量
    height: 35
  }
  var captcha = svgCaptcha.create(codeConfig);

  //req.session.captcha = captcha.text.toLowerCase(); //存session用于验证接口获取文字码
  var codeData = {
    img: captcha.data
  }
  res.setHeader('Content-Type', 'image/svg+xml');
  res.end(String(captcha.data));
})

router.post('/login', function (req, res, neex) {
  var name = req.body.name;
  var pwd = req.body.password;
  var selectSQL = "select * from t_user where name = '" + name + "' and password = '" + pwd + "'";
  db.query(selectSQL, [], function (results, fields) {
    if (results.data.length == 0) {
      res.writeHeader(200, { "Content-Type": "text/html;charset=utf-8" });
      results = { ...results, status: 0, msg: "账号或密码错误!" }
      res.end(JSON.stringify(results))
    } else {
      res.writeHeader(200, { "Content-Type": "text/html;charset=utf-8" });
      results = { ...results, status: 200, msg: "登陆成功!" }
      res.end(JSON.stringify(results))
    }
  })
})

router.post('/register', function (req, res, neex) {
  var name = req.body.name;
  var pwd = req.body.pwd;
  var email = req.body.email;
  var phone = req.body.phone;
  //判断用户是否存在
  var queryString = "select * from t_user where name='" + name + "'";
  db.query(queryString, (results, fields) => {
    if (results.data.length != 0) {
      res.writeHeader(200, { "Content-Type": "text/html;charset=utf-8" });
      results = { ...results, status: 0, msg: "用户名已存在，注册失败!" }
      res.end(JSON.stringify(results));
    }
  })
  var queryString = "insert into t_user(name, password,email,phone) values('" + name + "', '" + pwd + "','" + email + "','" + phone + "')";
  db.query(queryString, [], function (results, rs) {
    res.writeHeader(200, { "Content-Type": "text/html;charset=utf-8" });
    results = { ...results, status: 200, msg: "注册成功!" }
    res.end(JSON.stringify(results));
  })
})

module.exports = router;


