var mongoose = require('mongoose');

var siteSchema = new mongoose.Schema({
    url: String,
    name: String,
    languages: [String],
    paid: {type: Boolean, default: false },
    virtual: {type: Boolean, default: true },
    price_per_month: Number,
    rating: {type: Number, default: 0.0 }
  });

var Site = mongoose.model('Site', siteSchema); // register model
module.exports = {
  Site: Site
}
