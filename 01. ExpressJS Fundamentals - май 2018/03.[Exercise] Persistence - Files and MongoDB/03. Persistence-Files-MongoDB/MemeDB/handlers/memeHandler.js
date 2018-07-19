const fs = require('fs')

function viewAll (req, res) {
  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err)
      return
    }

    data = JSON.parse(data)

    res.sendHTML(req.pathname)
  })
}

function viewAddMeme (req, res) {

}

function addMeme (req, res) {

}

function getDetails (req, res) {

}

module.exports = (req, res) => {
  if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
    viewAll(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'GET') {
    viewAddMeme(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'POST') {
    addMeme(req, res)
  } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
    getDetails(req, res)
  } else {
    return true
  }
}
