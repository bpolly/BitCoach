var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var site = require('../models/site');
var mongoose = require('mongoose');
var util = require('util');
var category = "Sites";
var json

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  var Site = require("../models/site").Site
  Site.find({}).exec(function(err, results) {
        console.log(results);
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
  Site.find({}).exec(function(err, results) {
        console.log(results);
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
      rating: req.body.rating
    }, function (err, result) {
      //if (err) return handleError(err);
      console.log('Update result: ', result);
      res.redirect('/sites/table');
  })



});


module.exports = router;
