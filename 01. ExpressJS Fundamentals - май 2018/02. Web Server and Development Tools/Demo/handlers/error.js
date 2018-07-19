const fs = require('fs')

async function errorHandler (req, res) {
  fs.readFile('./views/error.html', 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
      res.write('<h1>404</h1>')
      res.end()
      return
    }

    res.writeHead(404, {
      'Content-Type': 'text/html'
    })
    res.write(data)
    res.end()
  })
}

module.exports = errorHandler
