const express = require('express')
const config = require('./config/config')
const app = express()

let env = 'development'
require('./config/database')(config[env])
require('./config/express')(app, config[env])
require('./config/passport')()
require('./config/routes')(app)

const port = config[env].port

app.listen(port, () => console.log(`Server is listening on port ${port}`))
