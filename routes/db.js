var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var Site = require("../models/site").Site;
var Language = require("../models/language").Language;
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

  var query;
  // If value has comparator
  var comp="";
  if(attribute_value.match('>') != null) comp = ">";
  else if(attribute_value.match('>=') != null) comp = "$>=";
  else if(attribute_value.match('<') != null) comp = "<";
  else if(attribute_value.match('<=') != null) comp = "<=";
  else if(attribute_value.match('==') != null) comp = "===";

  // if there is no comparator
  else {
    query = {};
    if(attribute.length > 0 && attribute_value.length > 0){
      query[attribute] = attribute_value;
    }
    model.where(query).exec(function(err, results) {
            console.log("No Comparator Called!");
            console.log("query"+ query);
            console.log("attribute:"+attribute);
            console.log("attribute_value:"+attribute_value);
            console.log(results);
            console.log(JSON.stringify(results));
            res.render('db/result', { title: 'DB Search Results', category: category, results: results, model: model_choice.toLowerCase() });
          });
      }
  // if there is a comparator
  if(comp.length > 0){
    query="this."+attribute_value;
    model.$where(query).exec(function(err, results) {
            console.log("Comparator Called!");
            console.log("query"+ query);
            console.log("attribute:"+attribute);
            console.log("attribute_value:"+attribute_value);
            console.log(results);
            console.log(JSON.stringify(results));
            res.render('db/result', { title: 'DB Search Results', category: category, results: results, model: model_choice.toLowerCase() });
          });
  }
});

// Test route I use to specifically remove elements
router.get('/remove', function(req, res, next){
  Site.find({name:'Team Treehouse'}).remove(function (err) {
    if (err) return handleError(err);
      console.log("ENTRIES REMOVED");
  });
  res.send("deleted");
});

// Test route to seed DB
router.get('/seed/confirm', function(req, res, next){
  require('../db_seeds/test_seed.js');
  res.send("DB Seeded");
});

router.get('/seed/test', function(req, res, next){
  Site.findOne({})
  .populate('languages')
  .exec(function (err, site) {
  if (err) return handleError(err);
  //console.log(site.languages)
  for(var i = 0; i < site.languages.length; i++){
    console.log(site.languages[i]);
  }
  //console.log('The languages are %s', site.languages);
  // prints "The creator is Aaron"
});
  res.send("DB Seeded");
});


module.exports = router;
