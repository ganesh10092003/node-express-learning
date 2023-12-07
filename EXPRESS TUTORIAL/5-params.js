const express = require('express')
const app = express();

const { products } = require('./data')

app.get('/', (req, res) => {
  res.status(200).send(
    `<h1>Welcome to the HOME page</h1>
    <p><a href='/api/products'>Click here</a> To GET all products list</p>`
  )
})
app.get('/api/products', (req, res) => {
  const allGistProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image, info: "forNowNothing" }
  })
  res.status(200).json(allGistProducts)
})
app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params; //* is an object with all the params mentioned in the app.get() url
  const requestedPdt = products.find((product) => product.id === Number(productId))
  if (!requestedPdt) {
    res.status(404).send("Product Does Not Exist")
  }
  res.status(200).json(requestedPdt)
})

app.listen(5000, () => { console.log("server listening on port 5000") });