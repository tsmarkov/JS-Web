function handleError (req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/plain'
  })
  res.write('Bad request')
  //   res.end('Not found')
  res.end()
}

module.exports = handleError
