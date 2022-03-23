const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/plantsDatabase'

mongoose
    .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(err => {
        console.error('Connection error', err.message)
    })

const db = mongoose.connection

module.exports = db