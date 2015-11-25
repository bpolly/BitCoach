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


module.exports = router;
