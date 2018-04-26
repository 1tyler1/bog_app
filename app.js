require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

const db = mongoose.connection
    db.on('error', err => {
        console.log(err)
    })
    db.once('once', () => {
        console.log('Connected to MongoDB!')
    })

    module.exports = app;