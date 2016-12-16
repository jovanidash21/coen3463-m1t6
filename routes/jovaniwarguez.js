var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('jovaniwarguez', {
        title: 'Jovani Cadorna Warguez',
        username: 'jovanidash21',
        profilepic: './img/jovaniwarguez.png',
        email: 'jwardash21@gmail.com',
        mobilenumber: '09272471075',
        facebook: 'https://facebook.com/jovani.cadornawarguez',
        twitter: 'http://www.twitter.com/jovanidash21',
        instagram: 'https://instagram.com/jovanidash21',
        linkedin: 'https://www.linkedin.com/in/jovani-warguez-827a8a11b',
        github: 'https://github.com/jovanidash21/',
        wordpress: 'https://jovaniwarguez.wordpress.com/'
    });
});

module.exports = router;