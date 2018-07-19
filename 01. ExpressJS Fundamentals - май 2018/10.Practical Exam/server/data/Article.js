const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: {type: String, required: [true, 'Title is required']},
    locked: {type: Boolean, default: false},
    creationDate: { type: Date, default: Date.now }
})

let Article = mongoose.model('Article', articleSchema)
module.exports = Article