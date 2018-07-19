const router = require('express').Router();

const getHome = (req, res) => {
    // res.render('home/index', { message });
    res.render('home/index');
};

router
    .get('/', getHome) 

module.exports = router;