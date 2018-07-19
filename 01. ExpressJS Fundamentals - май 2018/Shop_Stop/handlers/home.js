const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

/**
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 */
module.exports = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname

  if (req.url === '/' && req.method === 'GET') {
    let filePath = path.normalize(path.join(__dirname, '../views/home/index.html'))

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(err)
        return
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      })

      res.write(data)
      res.end()
    })
  } else {
    return true
  }
}
