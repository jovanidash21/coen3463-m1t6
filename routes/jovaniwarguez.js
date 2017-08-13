var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('jovaniwarguez', {
    title: 'Jovani Cadorna Warguez',
    slideshowLink1: 'https://jovanidash21.github.io/warguez/',
    slideshowLink2: 'http://www.atlasfertilizer.com/',
    slideshowLink3: 'http://eyeberrypi.cpecareer.com/',
    slideshowLink4: 'http://cpecareer.com/',
    slideshowImage1: '/img/slideshow/jovaniwarguez/1.png',
    slideshowImage2: '/img/slideshow/jovaniwarguez/2.png',
    slideshowImage3: '/img/slideshow/jovaniwarguez/3.png',
    slideshowImage4: '/img/slideshow/jovaniwarguez/4.png',
    username: 'jovanidash21',
    profilepic: './img/jovaniwarguez.png',
    email: 'jwardash21@gmail.com',
    mobilenumber: '09272471075',
    facebook: 'https://facebook.com/jovani.cadornawarguez',
    twitter: 'http://www.twitter.com/jovanidash21',
    instagram: 'https://instagram.com/jovanidash21',
    linkedin: 'https://www.linkedin.com/in/jovani-warguez-827a8a11b',
    github: 'https://github.com/jovanidash21/',
    codepen: 'http://codepen.io/jovanidash21/',
    wordpress: 'https://jovaniwarguez.wordpress.com/'
  });
});

module.exports = router;