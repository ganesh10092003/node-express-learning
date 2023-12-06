const express = require('express');
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
const app = express();

app.get('/', (req, res) => {
  console.log("user hit the resource")
  res.status(200)
    .send("HOME PAGE")   // similar to res.end()
})

app.get('/about', (req, res) => {
  res.status(200)
    .send("ABOUT PAGE")
})

//* .all listens to all the methods
app.all('*', (req, res) => {
  res.status(404)
    .send(basicPageNotFound)
})

app.listen(5000, () => { console.log("Server is listening on port 5000") })

//* app.get     (READ)
//* app.post    (INSERT)
//* app.put     (UPDATE)
//* app.delete  (DELETE)
//* app.all
//* app.use
//* app.listen


