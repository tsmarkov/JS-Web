const fs = require('fs')
const path = require('path')

function readFile (res, pathname, contentType) {
  if (!pathname) {
    throw new ReferenceError('Argument "pathname" cannot be undefined')
  }
  pathname = path.join(__dirname, `../${pathname}`)

  if (!contentType) {
    contentType = 'text/html'
  }

  fs.readFile(pathname, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      res.writeHead(500, {
        'Content-Type': 'text/plain'
      })
      res.write(`Could not read file with path "${pathname}"`)
      res.end()
      return
    }

    res.writeHead(200, {
      'Content-Type': contentType
    })
    res.write(data)
    res.end()
  })
}

module.exports = (res) => {
  res.view = (path) => {
    readFile(res, path)
  }
  res.staticFile = (res, contentType) => {
    readFile(res, path, contentType)
  }
}
