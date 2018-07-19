const http = require('http')
const url = require('url')

const attachFileReader = require('./config/fileReader')
const handlers = require('./handlers')
const port = 3000

function framework (req, res) {
  console.log(req.url)

  req.urlData = url.parse(req.url)

  attachFileReader(res)
  for (const handler of handlers) {
    if (handler(req, res) !== true) {
      break
    }
  }
}

let server = http.createServer(framework)
server.listen(port)

console.log(`Server is listening on port ${port}`)
