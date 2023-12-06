const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end("Home Page")
  }
  else if (req.url === "/about") {
    //* Synchronous Loops which will block all the Requesting Pages once 
    //* this about page is requested
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 1000; j++) {
        log(`${i} ${j}`);
      }
    }
    res.end("About Page")
  }
  else {
    res.end("Error Page")
  }
})

server.listen(5000, () => {
  log("Server is listning on port 5000....")
})