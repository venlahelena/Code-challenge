const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    description: String
});

module.exports = mongoose.model("Books", BookSchema);