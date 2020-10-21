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

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})