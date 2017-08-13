var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('nerylempenio', {
    title: 'Neryl Anne Barbosa Empenio',
    slideshowLink1: 'https://github.com/nerylempenio/',
    slideshowLink2: 'https://web.facebook.com/coresofficial/',
    slideshowLink3: 'http://esep.7-eleven.com.ph/moodle/login/index.php',
    slideshowLink4: 'http://cpecareer.com/',
    slideshowImage1: '/img/slideshow/nerylempenio/1.png',
    slideshowImage2: '/img/slideshow/nerylempenio/2.png',
    slideshowImage3: '/img/slideshow/nerylempenio/3.png',
    slideshowImage4: '/img/slideshow/nerylempenio/4.png',
    username: 'nerylempenio',
    profilepic: './img/nerylempenio.png',
    email: 'neryempenio@ymail.com',
    mobilenumber: '09352460370',
    facebook: 'https://facebook.com/profile.php?id=100001183719985',
    twitter: 'http://www.twitter.com/rrazamanaz',
    instagram: 'https://instagram.com/rrazamanaz',
    github: 'https://github.com/nerylempenio/'
  });
});

module.exports = router;