const mongoose = require('mongoose')

const editSchema = mongoose.Schema({
    articleId: { type: String, required: [true, 'Article ID is required'] },
    articleTitle: { type: String, required: [true, 'Title is required'] },
    content: { type: String, required: [true, 'Content is required'] },
    author: { type: String, required: [true, 'Author is required'] },
    creationDate: { type: Date, default: Date.now },
})

editSchema.virtual('shortContent').get(function () {
    let content = this.content
    
    return content
        .split(' ')
        .slice(0, 50)
        .join(' ')
        .concat('...')
});

let Edit = mongoose.model('Edits', editSchema)
module.exports = Edit