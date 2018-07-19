const fs = require('fs')
// const errorHandler = require('./error')

function handleBigFile (req, res) {
  if (req.path === '/bigfile') {
    const read = fs.createReadStream('./public/text/bigFile.txt')

    res.writeHead(200, {
      'content-type': 'text/plain'
    })
    read.pipe(res)
  } else {
    return true
  }
}

module.exports = handleBigFile
