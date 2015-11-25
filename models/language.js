var mongoose = require('mongoose');
Schema = mongoose.Schema;

var languageSchema = new mongoose.Schema({
    _id: Number,
    url: {
        type: String,
    },
    name: {
        type: String,
        unique: true,
        index: true
    },
    category: Number,
    sites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Site' }],
    long_description: String,
    short_description: String,
    thumbnail_path: String,
    large_banner_path: String
  });

var Language = mongoose.model('Language', languageSchema); // register model
module.exports = {
  Language: Language
}
