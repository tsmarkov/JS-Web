const http = require('http')
const url = require('url')
const fs = require('fs')
const handlers = require('./handlers/index')
const port = 3000

let server = http.createServer(frontController)

/**
 * @param {http.ClientRequest} req
 * @param {http.ClientResponse} res
 **/
function frontController (req, res) {
  req.path = url.parse(req.url).pathname
  console.log(req.path)

  res.sendHTML = (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        handlers.errorHandler(req, res)
        return
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data)
      res.end()
    })
  }

  if (req.method === 'GET') {
    for (const handler of handlers) {
      if (handler(req, res) !== true) {
        break
      }
    }
  } else if (req.method === 'POST') {
    let body = ''
    req.on('data', (data) => {
      body += data
    })
    req.on('end', () => {
      console.log(body)
      res.end()
    })
  }
}

server.listen(port)
console.log(`Listening on port ${port}`)
