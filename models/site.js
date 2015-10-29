var mongoose = require('mongoose');

var siteSchema = new mongoose.Schema({
    url: String,
    name: String,
    languages: [String],
    paid: {type: Boolean, default: false },
    virtual: {type: Boolean, default: true },
    price_per_month: Double,
    rating: {type: Double, default: 0.0 }
  });

mongoose.model('Site', siteSchema); // register model
