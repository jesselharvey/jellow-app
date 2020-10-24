const express = require('express')
const app = express()
const PORT = 3001
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '',
    database: 'jellow',
  },
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//GET requests
app.get('/', (req, res) => {
  res.json(req.body)
})

//POST requests
app.post('/', (req, res) => {
  res.json(req.body)
})

app.post('/api/board', (req, res) => {
  res.json(req.body)
})

//PATCH requests
app.patch('/', (req, res) => {
  res.json(req.body)
})

//DELETE requests
app.delete('/', (req, res) => {
  res.json(req.body)
})

app.delete('/api/board/:column', (req, res) => {
  // console.log(req.params)
  const { column } = req.params
  res.json(req.body)
})

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})