const app = require('express')()
const cookieParser = require('cookie-parser')

app.use(cookieParser)

app.get('/', (req, res) => {
  res.write('<a href="/readCookie">Read</a><br><a href="/count">Set</a><br><a href="/count">Set</a>')
  res.end()
})

app.get('/readCookie', (req, res) => {
  res.json(req.cookies)
})

app.get('/setCookie', (req, res) => {
  res.cookie('message', 'hi')
  res.end()
})

app.get('/count', (req, res) => {
  // const count = req.cookies.count || 0
  // res.cookie()
})

app.listen(3000)
