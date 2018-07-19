function aboutHandler (req, res) {
  if (req.path === '/about.html' && req.method === 'GET') {
    res.sendHTML('./views/about.html')
  } else {
    return true
  }
}

module.exports = aboutHandler
