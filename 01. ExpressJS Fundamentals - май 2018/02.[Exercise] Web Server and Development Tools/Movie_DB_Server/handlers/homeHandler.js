function homeHandler (req, res) {
  if (req.urlData.pathname === '/' && req.method === 'GET') {
    res.view('./views/home.html')
  } else {
    return true
  }
}

module.exports = homeHandler
