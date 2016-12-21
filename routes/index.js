var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'JN | Module1',
  	slideshow1: '/img/slideshow/index/1.png',
    slideshow2: '/img/slideshow/index/2.png',
    slideshow3: '/img/slideshow/index/3.png'
  	});
});

module.exports = router;