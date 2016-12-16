var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('jovaniwarguez', {
        title: 'Jovani Warguez',
        username: 'jovanidash21',
        profilepic: './img/jovaniwarguez.png'
    });
});

module.exports = router;