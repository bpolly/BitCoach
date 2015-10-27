var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  res.render('technologies', { title: 'Bit Coach' });
});

module.exports = router;
