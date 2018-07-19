const mongoose = require('mongoose')

let productSchema = mongoose.Schema({
    category: {
        type: String,
        enum: ['chicken', 'lamb', 'beef'],
        required: [true, 'Doner category is required']
    },
    imageUrl: {
        type: String
    },
    size: {
        type: Number,
        required: [true, 'Size is required'],
        min: [17, 'Size must be at least 17cm'],
        max: [24, 'Size must be maximum 24cm']
    },
    toppings: {
        type: [String],
        enum: ['pickle', 'tomato', 'onion', 'lettuce', 'hot sauce', 'extra sauce'],
        default: []
    }
})

let Product = mongoose.model('Product', productSchema)
module.exports = Product