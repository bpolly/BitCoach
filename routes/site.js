var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var site = require('../models/site');
var mongoose = require('mongoose');
var util = require('util');
var category = "Sites";
//var json

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  var Site = require("../models/site").Site
  Site.find({}).exec(function(err, results) {
        console.log(JSON.stringify(results));
        res.render('sites/index', { title: 'Sites', category: category, sites: results });
      });

});




/* GET home page. */
router.get('/table', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  //var collection = mongoose.connection.db.collection('Sites');
  // Tank.find({ size: 'small' }).where('createdDate').gt(oneYearAgo).exec(callback);
  var Site = require("../models/site").Site
  Site.find({}).sort({ 'rating' : 'descending'}).exec(function(err, results) {
        console.log(JSON.stringify(results));
        res.render('sites/table', { title: 'Sites Table', category: category, site_list: results });
      });

});

router.get('/new', function(req, res, next){
  res.render('sites/new', { title: 'New Site', category: category });
})



router.post('/new', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  var Site = mongoose.model('Site');
  newSite = new Site({
    url: req.body.url,
    name: req.body.name,
    languages: req.body.languages,
    paid: req.body.paid,
    virtual: req.body.virtual,
    price_per_month: req.body.price_per_month,
    rating: req.body.rating
  });

  newSite.save(function (err) {
    if (err) console.log ('Error on save!')
    res.redirect('/sites');
  });

});


router.get('/edit/:site_id', function(req, res, next){
  var Site = require("../models/site").Site;
  Site.findById(req.params.site_id).exec(function(err, site) {
    if(err) console.log("Error: "+err);
    else {
      console.log("Sites retrieved: "+site);
      console.log(JSON.stringify(site));
      res.render('sites/edit', { title: 'Edit Site', category: category, site: site });
    }
  });
});

router.post('/edit/:site_id', function(req, res, next){
  var Site = require("../models/site").Site;
  var query = { _id: req.params.site_id };
  Site.findOneAndUpdate(query,
    {
      url: req.body.url,
      name: req.body.name,
      languages: req.body.languages,
      paid: req.body.paid,
      virtual: req.body.virtual,
      price_per_month: req.body.price_per_month,
      rating: req.body.rating,
      long_description: req.body.long_description,
      short_description: req.body.short_description,
      thumbnail_path: req.body.thumbnail_path,
      large_banner_path: req.body.large_banner_path
    }, function (err, result) {
      //if (err) return handleError(err);
      console.log('Update result: ', JSON.stringify(result));
      res.redirect('/sites/table');
  });
});



router.post('/delete/:site_id', function(req, res, next){
  var Site = require("../models/site").Site;
  var query = { _id: req.params.site_id };
  Site.findOneAndRemove(query,function(err, result){
    console.log('Delete result: ', JSON.stringify(result));
    res.redirect('/sites/table');
  });
});


router.get('/show', function(req, res, next){
  res.render('sites/show');
});

router.get('/language_list.json', function(req, res, next){
  var Site = require("../models/site").Site;
  var language_list = [];
  Site.find({}).exec(function(err, sites) {
    //console.log(JSON.stringify(sites));
    sites.forEach(function (site, i){
      site["languages"].forEach(function (language, i){
        flag = false;
        for(var i = 0; i < language_list.length; i++){
          if(language_list[i] == language)
          {
             flag = true;
          }
       }
        if(!(flag)){
          language_list.push(language);
        }
        flag = false;
      });
    });
    var formatted_list = [];
    for(var j = 0; j < language_list.length; j++){
      var lang = {id: language_list[j], text: language_list[j]}
      formatted_list.push(lang);
    }
      res.send(formatted_list);
  });
});


router.get('/site_list.json', function(req, res, next){
  var Site = require("../models/site").Site;
  var site_list = [];
  Site.find({}).exec(function(err, sites) {
    //console.log(JSON.stringify(sites));
    sites.forEach(function (site, i){
      site_list.push(site.namew);
    });
    var formatted_list = [];
    for(var j = 0; j < site_list.length; j++){
      var lang = {id: site_list[j], text: site_list[j]}
      formatted_list.push(lang);
    }
      res.send(formatted_list);
  });
});



module.exports = router;
