const express = require('express');
const app = express();
const path = require('path')

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
//* all static Files like css files, javascript files, react components 
//* are kept in the 'public' folder of the app

app.use(express.static('./eg_HTML_CSS_JS/public'))

//* the JS file will be same for all users i.e. same for all the requests (irrespective of the user)
//* that is why it is a static file
//* this means that the website along with the JS (dynamics of the website) is given to the server which will send to the frontend

//? If we want different JS for different REQUESTS then we have to modify the JS while sending to the server
//? then it wont be a static file

//* if our project is a Static Project, i.e. only single HTML file
//* We can push the index.html file in the public folder and omit the following code as well
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './eg_HTML_CSS_JS/index.html')) //* .sendFile method needs absolute path of the project
  console.log(req.url, "is requested")
})

app.all('*', (req, res) => {
  res.status(404).send(basicPageNotFound)
})
app.listen(5000, () => { console.log("Server Listening on Port 5000") })