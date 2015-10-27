var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Bit Coach' });
    //res.render('layout');
    //res.render('navbar');
  //res.sendfile('views/navbar.html');
  //res.sendfile('views/index.html');
});

module.exports = router;
