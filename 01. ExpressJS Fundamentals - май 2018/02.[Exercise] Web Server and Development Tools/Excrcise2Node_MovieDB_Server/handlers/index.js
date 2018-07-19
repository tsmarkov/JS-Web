const staticHandler = require('./staticHandler')
const homeHandler = require('./homeHandler')
const movieHandler = require('./movieHandler')
const errorHandler = require('./errorHandler')

module.exports = [
  homeHandler,
  movieHandler,
  staticHandler,
  errorHandler
]
