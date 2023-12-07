const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//* app.use() applies the middleware to all the Methods that are mentioned after the app.use() statement
app.use([logger, authorize])
//* the path means that 
//* this logger will apply to all the endpoints starting with '/api' and not to others
//* as the middleware doesnt know what all endPoints are defined
//* the middleware runs successfully even though the endpoint is not defined

app.get('/', (req, res) => {
  res.send("HOME PAGE")
})
app.get('/about', (req, res) => {
  res.send("ABOUT PAGE")
})
app.get('/api/products', (req, res) => {
  res.send("PRODUCTS LIST")
})
app.get('/api/items', (req, res) => {
  res.send("ITEMS LIST")
})

app.listen(5000, () => { console.log("server listening on port 5000") })