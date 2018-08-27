var express = require('express');
var router = express.Router();
var db = require("../mysqlConfig");
/* GET home page. */
router.get('/', function (req, res, next) {
  db.query('SELECT * FROM emp', [], function (results, fields) {
    console.log(results);

  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
