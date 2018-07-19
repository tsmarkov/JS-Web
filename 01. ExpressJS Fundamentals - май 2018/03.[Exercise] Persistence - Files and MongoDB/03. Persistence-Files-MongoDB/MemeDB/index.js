const fs = require('fs')
const http = require('http')
const url = require('url')
const handlers = require('./handlers/handlerBlender')
const db = require('./config/dataBase')
const port = 2323

db.load().then(() => {
  console.log('testing')
  http
    .createServer((req, res) => {
      req.pathname = url.parse(req.url).pathname
      res.errorHandler = handlers.errorHandler

      res.sendHTML = (path) => {
        fs.readFile(path, 'utf8', (err, data) => {
          if (err) {
            console.log(err)
            return
          }

          res.writeHead(200, {
            'content-type': 'text/html'
          })
          res.write(data)
          res.end()
        })
      }

      for (let handler of handlers) {
        let task = handler(req, res)
        if (task !== true) {
          break
        }
      }
    })
    .listen(port)
  console.log('Im listening on ' + port)
}).catch(() => {
  console.log('Failed to load DB')
})
