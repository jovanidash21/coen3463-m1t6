var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('nerylempenio', {
        title: 'Neryl Empenio',
        username: 'nerylempenio',
        profilepic: './img/nerylempenio.png'
    });
});

module.exports = router;