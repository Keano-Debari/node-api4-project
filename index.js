require('dotenv').config() // this allows to "inject" fake environment variables

const { PORT } = require('./config')

const express = require('express')
const cors = require('cors')

const User = require('./users')

const server = express()

server.use(express.json()) // teaches express to parse req.body
server.use(cors())

server.get('/api/users', (req, res) => {
    res.send(User)
})

server.post('/api/register', (req, res) => {
    res.send(``)
})

server.post('/api/login', (req, res) => {
    res.send(``)
})

server.use('*', (req, res) => {
    res.json({ message: 'web 44'})
})

server.listen(PORT, () => { // heroku machine uses a different port
    console.log(`listening on ${PORT}`)
})