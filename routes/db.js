var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var Site = require("../models/site").Site;
var mongoose = require('mongoose');
var util = require('util');
var category = "DB";

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('db/index', { title: 'DB Search', category: category});
});

/* POST home page. Get parameters from DB Search*/
router.post('/', function(req, res, next) {
  //var Site = require("../models/site").Site;
  var site_list;
  var model = String(req.body.model);
  var attribute = String(req.body.attribute);
  var attribute_value = String(req.body.attribute_value);
  var query = {};
  var criteria = attribute;
  query[criteria] = attribute_value;
  var sites = Site.find(query).exec(function(err, results) {
          console.log(query);
          console.log(typeof(attribute));
          console.log(typeof(attribute_value));
          console.log(results);
          console.log(JSON.stringify(results));
          res.render('db/result', { title: 'DB Search Results', category: category, site_list: results });
        });
  });

router.get('/remove', function(req, res, next){
  Site.find({}).remove({'rating':'0'}, function (err) {
    if (err) return handleError(err);
      console.log("ENTRIES REMOVED");
  });
  res.send("deleted");
});

module.exports = router;
