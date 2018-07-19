const controllers = require('../controllers')
const auth = require('./auth')

module.exports = (app) => {
  app.get('/', controllers.articles.index)

  app.get('/users/register', controllers.users.registerGet)
  app.post('/users/register', controllers.users.registerPost)
  app.get('/users/login', controllers.users.loginGet)
  app.post('/users/login', controllers.users.loginPost)
  app.get('/users/logout', auth.isAuthenticated, controllers.users.logout)

  app.get('/articles/create', auth.isAuthenticated, controllers.articles.getCreate)
  app.post('/articles/create', auth.isAuthenticated, controllers.articles.postCreate)
  app.get('/articles/details/:id', controllers.articles.articleDetails)
  app.get('/articles/all', controllers.articles.allArticles)
  app.get('/articles/latest', controllers.articles.latest)
  app.get('/articles/edit/:id', auth.isAuthenticated, controllers.articles.getEdit)
  app.post('/articles/edit', auth.isAuthenticated, controllers.articles.postEdit)
  app.get('/articles/history/:id', controllers.articles.articleHistory)
  app.get('/article/edit/:id', auth.isAuthenticated, controllers.articles.previousEdit)
  app.get('/articles/edit/:id', auth.isAuthenticated, controllers.articles.getEdit)
  app.get('/articles/lock/:id', auth.isInRole, controllers.articles.lock)
  app.get('/articles/unlock/:id', auth.isInRole, controllers.articles.unlock)


  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
