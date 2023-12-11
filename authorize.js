const authorize = (req, res, next) => {
  const { user } = req.query
  if (user === 'teja') {
    req.user = { name: 'teja', id: 3 } //* can add the "user object of the request" inside the middleware function
    next()
  } else {
    res.status(401).send(`<h1>${user} is UnAuthorized</h1>`)
  }
  next()
}
module.exports = authorize