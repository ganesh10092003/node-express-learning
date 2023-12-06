const http = require('http')

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Welcome to our home page');
  }
  else if (request.url === '/about') {
    response.end('Welcome to our ABOUT page');
  }
  else {
    response.end(`
    <h1> OOPS!!</h1>
    <p>We can't find the requested page</br>
    <a href='/'> Click here</a> to navigate back
    </p>
    `);
  }
})
server.listen(5000) //portNumber