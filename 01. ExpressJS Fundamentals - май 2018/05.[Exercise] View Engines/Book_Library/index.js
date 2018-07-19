const env = 'development'

const express = require('express')
const settings = require('./config/settings')[env]
const database = require('./config/database')
const server = require('./config/server')
const port = settings.port

database(settings)

const app = express()
server(app)

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
