const router = require('express').Router()
const User = require('../models/User')

const postFindThread = (req, res) => {
    const requestUsername = req.params.username;
    const username = req.user.username

    User
        .find({
            $and: [
                { $or: [{ username: requestUsername }] },
                { $or: [{ username: username }] }
            ]
        })
        .then(data => {
            console.log(data)
        })
}

const getChatroom = (req, res) => {
    

}

router.get('/find', getChatroom)
router.post('/find', postFindThread)

module.exports = router;