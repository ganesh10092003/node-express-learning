const express = require('express')
const app = express();

//TODO      Request => MIDDLEWARE => Response  (this is how Express works)

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

//* Logger acts as a MIDDLEWARE function which takes in the request and it has to pass the request to the "Next" middleWare
//* or it has to send the response
app.get('/', logger, (req, res) => {
  res.status(200).send("HOME PAGE")
})
app.get('/about', logger, (req, res) => {
  res.status(200).send("ABOUT PAGE")
})

app.listen(5000, () => { console.log("server is listening on port 5000") })