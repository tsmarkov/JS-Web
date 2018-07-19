const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer((req, res) => {
  let path = req.url

  if ((path === '/' || path === '/index') && req.method === 'GET') {
    fs.readFile('./views/index.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/html'
        })
        res.write('<h1>Greda! <span style="color:red">:(</span></h1>')
        res.end()
        return
      }

      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      res.write(data)
      res.end()
    })
  } else if (path === '/about') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })
    res.write('<h1>About майка ти!</h1>')
    res.end()
  } else {
    fs.readFile('./views/error.html', 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, {
          'Content-Type': 'text/html; charset=utf-8'
        })
        res.write('<h1>Гръм в рая!</h1>')
        return
      }

      res.writeHead(404, {
        'Content-Type': 'text/html'
      })
      res.write(data)
      res.end()
    })
  }
})

server.listen(port)
console.log(`Listening on port ${port}...`)
