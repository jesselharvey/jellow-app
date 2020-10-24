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

function attachUser(req, res, next) {
  const authorizationHeader = req.headers.authorization
  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1]
    const decoded = jwtToken.decode(token)
    req.user = { id: decoded.id, email: decoded.email }
  }
  next()
}
app.use(attachUser)

//GET requests

// display database after login is successful
app.get('/api/board', async (req, res) => {
  // LEFT JOIN before CARDS and columns
  const displayProjectSql = `
  SELECT * FROM projects
  INNER JOIN columns ON projects.id = columns.projects_id
  LEFT JOIN cards ON columns.id = cards.columns_id
  WHERE projects.id = 1;`
  console.log(displayProjectSql)
  const jellowApp = await knex.raw(displayProjectSql)
  res.json(jellowApp.rows)
})

// SELECT projects.title as project_title, columns.title as columns_title, cards.title as card_title

//POST requests

function createSalt(len = 20) {
  const vals = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let str = ""
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * vals.length)
    str += vals.charAt(randomIndex)
  }
  return str
}

// registration feeding users table on database
app.post("/registration", async (req, res) => {
  const { email, password } = req.body
  const salt = createSalt(20)
  const hashedPassword = sha512(password + salt)
  const checkIfUserExistsSql = `SELECT * FROM users WHERE email = ?;`
  const hasAUser = await conn.raw(checkIfUserExistsSql, [email])
  const userExists = hasAUser.rows.length
  if (userExists) {
    res.status(400).json({ message: "email already exists" })
  } else {
    const addUserSql = `
                INSERT INTO users (email, password, salt)
                VALUES (?, ?, ?);
            `
    const insertedUser = await conn.raw(addUserSql, [
      email,
      hashedPassword,
      salt,
    ])
    res.status(201).json({ message: "user successfully created" })
  }
})

// login page
app.post("/login", async (req, res, next) => {
  console.log("working", req.body)
  try {
    const { email, password } = req.body
    const checkIfUserExistsSql = `SELECT * FROM users WHERE email = ?;`
    const hasAUser = await conn.raw(checkIfUserExistsSql, [email])
    const userExists = hasAUser.rows.length
    if (!userExists) {
      res.status(400).json({ message: "invalid email or password" })
    } else {
      const user = hasAUser.rows[0]
      const hashedPassword = sha512(password + user.salt)
      console.log(hashedPassword, sha512(user.password + user.salt))
      if (hashedPassword === sha512(user.password + user.salt)) {
        // generate a token based on server secret for client to use to authenticate
        const token = jwt.sign(
          { id: user.id, email: user.email },
          process.env.SECRET
        )
        res.status(200).json({ token: token })
      } else {
        res.status(400).json({ message: "invalid email or password" })
      }
    }
  } catch (error) {
    console.log("Login error:", error)
  }
})


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
<<<<<<< HEAD
  const postCardsUsersSql = `
  INSERT INTO cards_users (cards_id, users_id)
  VALUES (?, ?)`
  const postCardsUsers = knex.raw(postCardsUsersSql, [cards_id, users_id])
=======
  const cardsUsersSql = `
  INSERT INTO cards_users (cards_id, users_id)
  VALUES (?, ?)`
  const postCardsUsers = knex.raw(cardsUsersSql, [cards_id, users_id])
>>>>>>> 70c5638c3bab7921383f5cb021fa75d544200239
  res.json(postCardsUsers.rows)
})

//PATCH requests
// update columns
app.patch("/api/jellow-app/:id", async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  await knex.raw("UPDATE columns SET title = ? WHERE id = ?", [title, id]);
  res.json("updated column");
})

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

<<<<<<< HEAD
// app.patch('/', (req, res) => {
//   res.json(req.body)
// })

// UPDATE Customers
// SET ContactName = 'Alfred Schmidt', City= 'Frankfurt'
// WHERE CustomerID = 1;
=======
//DELETE requests
// delete columns by id
app.delete("/api/jellow-app/:id", async (req, res) => {
  const { id } = req.body;
  await knex.raw("DELETE FROM columns WHERE id = ?", [id]);
  res.json("deleted column");
});

//delete cards by id
app.delete("/api/cards/:id", async (req, res) => {
  const { id } = req.params;
  await knex.raw("DELETE FROM cards WHERE id = ?", [id]);
  res.json("deleted card");
})
>>>>>>> 70c5638c3bab7921383f5cb021fa75d544200239


app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})