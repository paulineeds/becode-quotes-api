let mongoose = require('mongoose');

  let quoteSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    quote: String,
    author: String,
  });
  module.exports = mongoose.model('TheQuote', quoteSchema)