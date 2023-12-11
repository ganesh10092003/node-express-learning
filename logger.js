const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  // res.send("inside the MiddleWare")
  //*can do this or......

  //*this
  next()
}

module.exports = logger