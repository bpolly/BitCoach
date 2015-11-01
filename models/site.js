var mongoose = require('mongoose');

var siteSchema = new mongoose.Schema({
    url: {
        type: String,
        unique: true,
        index: true
    },
    name: {
        type: String,
        unique: true,
        index: true
    },
    languages: [String],
    paid: {type: Boolean, default: false },
    plans: [{plan_type: String, price: Number}],
    virtual: {type: Boolean, default: true },
    rating: {type: Number, default: 0.0 },
    long_description: String,
    short_description: String,
    thumbnail_path: String,
    large_banner_path: String
  });

var Site = mongoose.model('Site', siteSchema); // register model
module.exports = {
  Site: Site
}
