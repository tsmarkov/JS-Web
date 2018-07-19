const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)
  app.get('/about', auth.isAuthenticated, controllers.home.about)

  app.get('/users/register', auth.isNotAuthenticated, controllers.users.registerGet)
  app.post('/users/register', auth.isNotAuthenticated, controllers.users.registerPost)
  app.get('/users/login', auth.isNotAuthenticated, controllers.users.loginGet)
  app.post('/users/login', auth.isNotAuthenticated, controllers.users.loginPost)
  app.get('/users/logout', controllers.users.logout)

  app.get('/products/create', auth.isAuthenticated, controllers.products.createGet)
  app.post('/products/create', auth.isAuthenticated, controllers.products.createPost)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
