const userController = require('./../controllers/user')
const articleController = require('./../controllers/article')
const homeController = require('./../controllers/home')
let i = 0;
function middle(req, res, next) {
  console.log('Mind blow ' + i)
  i++;
  next()
}

module.exports = (app) => {
  app.get('/', middle, homeController.index)

  app.get('/user/register', middle, userController.registerGet)
  app.post('/user/register', userController.registerPost)

  app.get('/user/login', middle, userController.loginGet)
  app.post('/user/login', userController.loginPost)

  app.get('/user/logout', userController.logout)

  app.get('/article/create', articleController.createGet)
  app.post('/article/create', articleController.createPost)

  app.get('/article/details/:id', articleController.details)

  app.get('/article/edit/:id', articleController.editGet)
  app.post('/article/edit/:id', articleController.editPost)

  app.get('/article/delete/:id', articleController.deleteGet)

  app.post('/article/delete/:id', articleController.deletePost)
}
