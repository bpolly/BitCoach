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
        //console.log(JSON.stringify(results));
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



router.get('/edit/:language_id', function(req, res, next){
  var Language = require("../models/language").Language;
  Language.findById(req.params.language_id).exec(function(err, language) {
    if(err) console.log("Error: "+err);
    else {
      console.log("Language retrieved: "+language);
      console.log(JSON.stringify(language));
      res.render('languages/edit', { title: 'Edit Language', category: category, language: language });
    }
  });
});


router.post('/edit/:language_id', function(req, res, next){
  var Language = require("../models/language").Language;
  var query = { _id: req.params.language_id };
  Language.findOneAndUpdate(query,
    {
      url: req.body.url,
      name: req.body.name,
      //languages: req.body.languages,
      category: parseInt(req.body.category),
      long_description: req.body.long_description,
      short_description: req.body.short_description,
      thumbnail_path: req.body.thumbnail_path,
      large_banner_path: req.body.large_banner_path
    }, function (err, result) {
      if (err) console.log(err);
      else {
        console.log('Update result: ', JSON.stringify(result));}
        res.redirect('/languages');
  });
});


module.exports = router;
