const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res) => {
  //* the callBack fucntion in the SERVER is also Asynchronous 
  //* and only calls when there is a request sent to the server
  log("Request sent")
  res.end("Hello World")
})

server.listen(5000, () => {
  log("Server is Listening to port : 5000.....")
})