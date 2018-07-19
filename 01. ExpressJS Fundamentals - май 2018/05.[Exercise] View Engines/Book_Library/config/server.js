const path = require('path')
const express = require('express')
const handlebars = require('express-handlebars')

module.exports = (app) => {
  app.engine('.hbs', handlebars({
    extname: '.hbs',
    layoutsDir: 'views/layouts',
    defaultLayout: 'main'
  }))
  app.set('view engine', '.hbs')

  app.use(express.static(path.join(__dirname, '../static')))
}
