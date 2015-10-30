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
  var model_choice = String(req.body.model);
  var model;
  switch(model_choice.toLowerCase()){
    case "site":
      model = Site;
      break;
    default:
      model = Site;
      break;
  }
  var attribute = String(req.body.attribute);
  var attribute_value = String(req.body.attribute_value);

  // If query is empty, display all elements from given model_choice
  // otherwise, perform query
  var query = {};
  if(attribute.length > 0 && attribute_value.length > 0){
    query[attribute] = attribute_value;
  }

  model.where(query).exec(function(err, results) {
          console.log(query);
          console.log(typeof(attribute));
          console.log(typeof(attribute_value));
          console.log(results);
          console.log(JSON.stringify(results));
          res.render('db/result', { title: 'DB Search Results', category: category, results: results, model: model_choice.toLowerCase() });
        });
  });

router.get('/remove', function(req, res, next){
  Site.find({name:'Udacity'}).remove(function (err) {
    if (err) return handleError(err);
      console.log("ENTRIES REMOVED");
  });
  res.send("deleted");
});

module.exports = router;
