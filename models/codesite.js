var mongoose = require('mongoose');

var codesiteSchema = new mongoose.Schema({
    address: String,
    name: String
  });

mongoose.model('Codesite', codesiteSchema); // register model
