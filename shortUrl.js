const mongoose = require('mongoose');
const shortid = require('shortid');

const shortUrlSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  full: {
    type: String,
    required: true
  },
  short: {
    type: String,
    required: true,
    default: shortid.generate
  },
  clicks: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('ShortUrl', shortUrlSchema);
