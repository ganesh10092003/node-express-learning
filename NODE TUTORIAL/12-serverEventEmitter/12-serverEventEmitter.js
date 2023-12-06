const http = require('http')

const server = http.createServer();

//* General Way of starting a server
// const server = http.createServer((req, res) => {
//   res.end("Welcome to our server")
// })

//* Server also has a method "ON", similar to eventEmitter.on() 
//* here also it listens to a request to the server 
//! This works on EventEmitter API (that is why it has the same method)
server.on('request', (req, res) => {
  res.end("Welcome to our Server")
})


server.listen(5000)