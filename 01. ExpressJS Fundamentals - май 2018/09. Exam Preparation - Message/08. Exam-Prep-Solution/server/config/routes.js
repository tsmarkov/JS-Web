const usersModule = require('../modules/usersModule');
const threadsModule = require('../modules/threadsModule');
const homeModule = require('../modules/homeModule');

const auth = require('../infrastructure/auth');

module.exports = (app) => {
    app.use('/', homeModule);

    app.use('/users', usersModule);

    app.use('/threads', threadsModule)

    app.all('*', (req, res) => {
        res.status(404)
        res.send('404 Not Found!')
        res.end()
    })
}
