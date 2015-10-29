var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  res.render('sites', { title: 'Sites' });
});

router.get('/new', function(req, res, next){
  res.render('sites/new', { title: 'Sites' });
})

module.exports = router;
