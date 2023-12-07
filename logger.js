const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  //*can do this or......
  // res.send("inside the MiddleWare")

  //*this
  next()
}

module.exports = logger