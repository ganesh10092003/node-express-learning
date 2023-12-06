const http = require('http')
const { readFileSync } = require('fs')

const html = readFileSync('./eg_HTML_CSS_JS/index.html', 'utf-8');
const css = readFileSync('./eg_HTML_CSS_JS/styles.css', 'utf-8');
const js = readFileSync('./eg_HTML_CSS_JS/browser-app.js', 'utf-8');
const logo = readFileSync('./eg_HTML_CSS_JS/logo.svg', 'utf-8');
const basicPageNotFound = `
<style>
  body{
    background-color: yellow;
    color: red;
    font-weight: bold;
  }
</style>
<h1>Page Not Found</h1>
`
const server = http.createServer((req, res) => {
  console.log("User hit the server")
  console.log(req.method, req.url)

  //! Have to load the any linked files (like images, css, js, other linked HTML files) 
  //? cause these files are also requests sent to the server while loading the web pages

  //todo THIS IS WHERE ------------EXPRESS.JS--------- comes in HANDY
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' }) //* The Content-type tells the browser what type of data the respose is writing
    //? If it is "text/html" it understands the HTML tags and displays the content inside the tags
    //? If it is "text/plaintext", it just prints the text, along with the tags
    res.write(html)
    res.end()
  }
  else if (req.url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' }) //* The Content-type tells the browser what type of data the respose is writing
    res.write(css)
    res.end()
  }
  else if (req.url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' }) //* The Content-type tells the browser what type of data the respose is writing
    res.end(logo)
  }
  else if (req.url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' }) //* The Content-type tells the browser what type of data the respose is writing
    res.write(js)
    res.end()
  }
  //*Page not Found
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write(basicPageNotFound)
    res.end()
  }
})

server.listen(5000)