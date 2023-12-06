const express = require('express')
const app = express()
const { products, people } = require('./data.js')
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

app.get('/', (req, res) => {
  res.status(200).send(
    `
    <h1>Welcome to Home Page</h1>
    <p><a href='/api/products'>Click Here</a> To call API and get the products</p>
  `
  )
})

//? If we want to display info of eachProduct at different endPoints, we have to write app.get() for all products seperately
app.get('/api/products', (req, res) => {
  const lessDescProducts = products.map((eachProduct) => {
    const { id, name, price } = eachProduct
    return { id, name, price }
  })
  res.status(200).json(lessDescProducts)
})

//? Instead of writing app.get() for each Product ID we use Parameters
app.get('/api/products/1', (req, res) => {
  const singlePdtDesc = products.find((eachProduct) => eachProduct.id === 1)
  res.status(200).json(singlePdtDesc)
})

app.listen(5000, () => { console.log("Server listening on port 5000") })