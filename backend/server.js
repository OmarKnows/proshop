const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
const products = require('./data/products')

dotenv.config()
app.use(cors())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id == req.params.id)
  res.json(product)
})

const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV

app.listen(PORT, console.log(`server running in ${MODE} mode on port ${PORT}`))
