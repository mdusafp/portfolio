var express = require('express');
var router = express.Router();

var author = 'Малютин Вадим';
var city = 'Санкт-Петербург';
var job = 'Веб-разработчик';
var title = [author, city, job].join(' | ');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: title });
});

module.exports = router;
