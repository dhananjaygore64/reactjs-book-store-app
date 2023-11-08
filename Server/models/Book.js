const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
	name: String,
	author: String,
	publishDate: String,
	publisher: String
  });

  const Book = mongoose.model('Book', BookSchema);

  module.exports = Book