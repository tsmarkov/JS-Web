'use strict'

const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const connectionString = 'mongodb://localhost:27017/unidb'

mongoose.connect(connectionString)
app.get(/\/|\/index.html/, (req, res) => {
  res.sendfile('./source/views/home.html')
})

app.listen(port, () => console.log('Example app listening on port 3000!'))
