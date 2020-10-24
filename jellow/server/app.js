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

// const middlewareThings = jwtMiddleware({ secret: process.env.SECRET, algorithms: ['HS256'] })

//GET requests

// display database after login is successful
app.get('/api/board', async (req, res) => {
  // LEFT JOIN before CARDS and columns
  const displaySql = `
  SELECT * FROM projects
  INNER JOIN columns ON projects.id = columns.projects_id
  LEFT JOIN cards ON columns.id = cards.columns_id
  WHERE projects.id = 1;`
  console.log(displaySql)
  const jellowApp = await knex.raw(displaySql)
  res.json(jellowApp.rows)
})

//POST requests

// registration feeding users table on database
app.post('/api/jellow-app', (req, res, next) => {
  const { email, password } = req.body
  const salt = []
  const registerationSql = `
  INSERT INTO users (email, password, salt)
  VALUES (?, ?, ?); `
  const postReg = knex.raw(registerationSql, [email, password, salt])
  res.json(postReg.body)
  next()
})
// missing salt

app.post('/api/board', (req, res) => {
  res.json(req.body)
})


// connect users_id and projects_id on projects_users table on database
app.post('/api/jellow-app', (req, res, next) => {
  const { users_id } = req.body.users.id
  const { projects_id } = req.body.projects.id
  const projectsUsersSql = `
  INSERT INTO projects_users (projects_id, users_id)
  VALUES (?, ?);`
  const postProjectsUsers = knex.raw(projectsUsersSql, [users_id, projects_id])
  res.json(postProjectsUsers.rows)
  next()
})


// projects feeding projects table on database
app.post('/api/jellow-app', (req, res, next) => {
  const { title } = req.body
  const projectsSql = `
  INSERT INTO projects (title)
  VALUES (?); `
  const postProjects = knex.raw(projectsSql, [title])
  res.json(postProjects.rows)
  next()
})

// columns feeding columns table on database
app.post('/api/jellow-app', (req, res, next) => {
  const { title, projects_id } = req.body
  const columnsSql = `
  INSERT INTO columns (title, projects_id)
  VALUES (?, ?)`
  const postColumns = knex.raw(columnsSql, [title, projects_id])
  res.json(postColumns.rows)
  next()
})

app.delete('/api/board/:column', (req, res) => {
  // console.log(req.params)
  const { column } = req.params
  res.json(req.body)
})


// cards feeding cards table on database
app.post('/api/jellow-app', (req, res, next) => {
  const { title, description, columns_id } = req.body
  const cardsSql = `
  INSERT INTO cards (title, description, columns_id)
  VALUES (?, ?, ?); `
  const postCards = knex.raw(cardsSql, [title, description, columns_id])
  res.json(postCards.rows)
  next()
})

// connect users_id and cards_id on cards_users table on database
app.post('/api/jellow-app', (req, res, next) => {
  const { cards_id } = req.body.cards.id
  const { users_id } = req.body.users.id
  const postCardsUsersSql = `
  INSERT INTO cards_users (cards_id, users_id)
  VALUES (?, ?)`
  const postCardsUsers = knex.raw(postCardsUsersSql, [cards_id, users_id])
  res.json(postCardsUsers.rows)
})

//PATCH requests
// update cards columns_id when moved to another column by cards id
app.patch('/api/jellow-app/:id', (req, res, next) => {
  const { columns_id } = req.body
  const id = req.params.id
  const patchColumnsIdOnCardWhenMovedSql = `
  UPDATE cards
  SET columns_id = ?
  WHERE cards.id - ?;`
  const patchMovingCard = knex.raw(patchColumnsIdOnCardWhenMovedSql, [columns_id, id])
  res.json(patchMovingCard.rows)
})

// app.patch('/', (req, res) => {
//   res.json(req.body)
// })

// UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;


app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})