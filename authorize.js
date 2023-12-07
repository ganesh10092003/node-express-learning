const authorize = (req, res, next) => {
  const { user } = req.query
  if (user === 'teja') {
    req.user = user
    next()
  } else {
    res.status(401).send(`${user} is UnAuthorized`)
  }
  next()
}
module.exports = authorize