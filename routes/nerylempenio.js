var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('nerylempenio', {
        title: 'Neryl Anne Barbosa Empenio',
        username: 'nerylempenio',
        email: 'neryempenio@ymail.com',
        mobilenumber: '09352460370',
        profilepic: './img/nerylempenio.png',
        facebook: 'https://facebook.com/profile.php?id=100001183719985',
        twitter: 'http://www.twitter.com/rrazamanaz',
        instagram: 'https://instagram.com/rrazamanaz',
        github: 'https://github.com/nerylempenio/'
    });
});

module.exports = router;