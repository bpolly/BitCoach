var express = require('express');
var router = express.Router();
var Codesite = require('../models/codesite');
var mongoose = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  var Codesite = mongoose.model('Codesite');
  codesite = new Codesite({
    address: "codesite.com",
    name: "CodeSite1"
  });
  res.render('codesites', {
    title: 'Codesites',
    CSVV: codesite
  });
  codesite.save(function (err) {if (err) console.log ('Error on save!')});

});

module.exports = router;
