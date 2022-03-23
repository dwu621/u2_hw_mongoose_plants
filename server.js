const express = require('express')
const routes = require('./routes')
const db = require('./db')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3000

const app = express()

app.use(bodyParser.json())

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))