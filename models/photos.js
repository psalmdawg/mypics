var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MO_photo_app');

var schema = new mongoose.Schema({
  name: String,
  path: String,
  filename: String
});

module.exports = mongoose.model('Photo', schema);
