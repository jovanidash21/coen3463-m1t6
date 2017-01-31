var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Team JN'
  	});
});

module.exports = router;