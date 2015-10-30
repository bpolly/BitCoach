var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Bit Coach' });
  var Site = require("../models/site").Site
  Site.find({}).exec(function(err, results) {
        console.log(results);
        console.log(JSON.stringify(results));
        res.render('rankings', { title: 'Rankings', sites: results });
      });

});

module.exports = router;
