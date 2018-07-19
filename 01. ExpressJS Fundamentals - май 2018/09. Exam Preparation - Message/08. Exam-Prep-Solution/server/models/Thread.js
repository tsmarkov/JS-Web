const mongoose = require('mongoose')

const threadSchema = mongoose.Schema({
    authorUsername: { type: String, require: [true, 'Author Username is required']},
    secondUsername: { type: String, require: [true, 'Second Username is required']},
    userNames: { type: String, default: []},
    createOn: { type: Date, default: Date.now},
})

const thread = mongoose.model('Thread', threadSchema)

module.exports = thread