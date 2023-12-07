const express = require('express')
const app = express();
const path = require('path')

const { products, people } = require('./data')

app.get('/', (req, res) => {
  res.status(200).send("<p><a href='/api/listPdts'>Click Here</a> to see the list of all products<br/><a href='/api/people'>Click Here</a>to see the list of people</p>")
})
app.get('/api/listPdts', (req, res) => {
  const listOfPdts = products.map((pdt) => {
    const { id, name, image } = pdt
    return { id, name, image, info: `http://${req.headers.host}/api/listPdts/${id}` }
  })
  res.status(200).json(listOfPdts)
})
app.get('/api/listPdts/:pdtID', (req, res) => {
  const { pdtID } = req.params
  const reqPdt = products.find((pdt) => pdt.id === Number(pdtID))
  if (reqPdt != undefined) {
    res.status(200).json(reqPdt)
  } else {
    res.status(404).send("Product Not Found")
  }
})

app.get('/api/people', (req, res) => {
  const { search, limit } = req.query
  let sortedPeople = [...people]
  if (search) {
    sortedPeople = sortedPeople.filter((person) => {
      return person.name.startsWith(search)
    })
  }
  if (limit) {
    sortedPeople = sortedPeople.slice(0, Number(limit))
  }
  res.status(200).json({ success: true, data: [...sortedPeople] })
})

//* can also do this similar to params
// app.get('/api/people/query', (req, res) => {
//   const { name, id } = req.query
//   const reqPerson = people.find((person) => ((person.name === name) && (person.id === Number(id))))
//   if (reqPerson != undefined) {
//     res.status(200).json(reqPerson)
//   }
//   else {
//     res.status(404).send("Person not found")
//   }
// })

app.listen(5000, () => { console.log("Server listening on port 5000") })