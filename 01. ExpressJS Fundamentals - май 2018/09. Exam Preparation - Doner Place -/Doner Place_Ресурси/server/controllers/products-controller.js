const Product = require('mongoose').model('Product')
const validToppings = {
    pickle: 'pickle',
    tomato: 'tomato',
    onion: 'onion',
    lettuce: 'lettuce',
    'hot sauce': 'hot sauce',
    'extra sauce': 'extra sauce'
}


module.exports = {
    createGet: (req, res) => {
        res.render('products/create')
    },
    createPost: (req, res) => {
        let {
            category,
            imageUrl,
            size,
            toppings
        } = req.body;

        toppings = toppings.split(',').map(x => x.trim()).filter(x => x !== '' && validToppings.hasOwnProperty(x))

        Product
            .create({
                category,
                imageUrl,
                size,
                toppings
            })
            .then(product => {
                res.render('home/index')
            })
            .catch(err => {
                res.render('products/create', {
                    error: err.message,
                    category,
                    imageUrl,
                    size,
                    toppings
                })
            })
    }
}