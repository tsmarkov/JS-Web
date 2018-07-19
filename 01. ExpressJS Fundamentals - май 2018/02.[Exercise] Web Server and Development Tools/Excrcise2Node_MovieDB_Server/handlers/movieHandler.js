// let movies = require('./config/dataBase')

function moviesHandler (req, res) {
  let pathname = req.urlData.pathname

  if (pathname === '/movies/all' && req.method === 'GET') {
    res.view('./views/viewAll.html')
  } else {
    return true
  }
}

module.exports = moviesHandler
