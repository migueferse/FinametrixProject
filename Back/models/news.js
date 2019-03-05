const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewsSchema = new Schema({
    title: { type: String },
    description: { type: String },
    date: { type: String },
    content: { type: String },
    author: { type: String },
    archiveDate: { type: String },
    archived: { type: Boolean },
    removed: { type: Boolean }
});

module.exports = mongoose.model('news', NewsSchema);