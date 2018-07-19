function homeHandler (req, res) {
  if ((req.path === '/' || req.path === '/index.html') && req.method === 'GET') {
    res.sendHTML('./views/index.html')
  } else {
    return true
  }
}

module.exports = homeHandler
