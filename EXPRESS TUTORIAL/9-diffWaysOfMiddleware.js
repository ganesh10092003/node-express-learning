const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')
const path = require('path')

//*Here we created our own MiddleWare function
// app.use([logger, authorize]);

//? EXPRESS also has its own built-in MIDDLEWARE Functions that we can use
//? one such example is 'EXPRESS.STATIC()'
// app.use(express.static('./eg_HTML_CSS_JS/public'))
// app.get('/htmlFile', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './eg_HTML_CSS_JS/index.html'));
// })

//? We can use a third party middleware also
//? best example is morgan npm
const morgan = require('morgan')
app.use(morgan('tiny'))
//* This will console.log(method, url, status code, response time)

app.get('/', (req, res) => {
  res.send('<h1>HOME PAGE</h1>')
})
app.get('/about', (req, res) => {
  res.send('<h1>ABOUT PAGE</h1>')
})
app.get('/api/products', (req, res) => {
  res.send('<h1>Products List</h1>')
})

app.listen(5000, () => { console.log('Server Listening at port 5000') })