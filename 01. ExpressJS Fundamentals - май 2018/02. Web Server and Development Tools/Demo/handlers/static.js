const fs = require('fs')
const erordisaj = ('./error.js')

const mimeTypes = {
  'css': 'text/css',
  'js': 'application/javascript',
  'jpg': 'image/jpeg',
  'jpeg': 'image/jpeg',
  'txt': 'text/plain'
}

function staticHandler (req, res) {
  if (req.path.startsWith('/public/')) {
    const extension = req.path.split('.').pop()

    try {
      res.writeHead(200, {
        'Content-Type': mimeTypes[extension]
      })
      const readStream = fs.createReadStream('.' + req.path)
      readStream.pipe(res)
    } catch (err) {
      if (err) {
        console.log(err)
      }
      res.writeHead(404, {
        'content-type': 'text/html'
      })
      res.write('<h1>404 Not Found</h1>')
      res.end()
    }
  } else {
    return true
  }
}

module.exports = staticHandler
