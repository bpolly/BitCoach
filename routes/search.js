var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var site = require('../models/site');
var mongoose = require('mongoose');
var util = require('util');
var category = "Search";
//var json

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



/* GET home page. */
router.post('/', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  var Site = require("../models/site").Site
  console.log("Search Type: " + req.body.search_type);
  var search_term = req.body.search_input;
    //Site.find({ search_term: { $in : this.languages } } ).exec(function(err, results) {
    var query ={};
    query["languages"] = new RegExp(search_term, 'i');
    Site.where(query).exec(function(err, results) {
          console.log("Search term: "+search_term);
          console.log(results);
          console.log(JSON.stringify(results));
          res.render('db/result', { title: 'DB Search Results', category: category, results: results});
        });
});


module.exports = router;
