var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var language = require('../models/language');
var mongoose = require('mongoose');
var util = require('util');
var category = "Languages";
//var json

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  var Language = require("../models/language").Language
  Language.find({}).sort({ '_id' : 'ascending'}).exec(function(err, results) {
        console.log(JSON.stringify(results));
        res.render('languages/index', { title: 'Languages', category: category, languages: results });
      });

});

router.get('/:language_id', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  var Language = require("../models/language").Language
  Language.findById(req.params.language_id).exec(function(err, result) {
        console.log(JSON.stringify(result));
        res.render('languages/show', { title: 'Languages', category: category, language: result });
      });

});


module.exports = router;
