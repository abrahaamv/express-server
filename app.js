require('express-async-errors')
const config = require('./helpers/config')
const logger = require('./helpers/logger')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const notesRouter = require('./controllers/notes')
const usersRouter = require('./controllers/users')
const {
  requestLogger,
  errorHandler,
  unknownEndpointHandler
} = require('./helpers/middleware')

logger.info('Starting server: connecting to database...')
mongoose.connect(config.MONGODB_URI)
  .then(() => logger.info('Server connected to MongoDB!'))
  .catch(error => logger.info('Error while connecting to MongoDB: ', error.message))

const app = express()
app.use(express.json())
app.use(cors())
app.use(requestLogger)
app.use('/api/notes', notesRouter)
app.use('/api/users', usersRouter)
app.use(errorHandler)
app.use(unknownEndpointHandler)
module.exports = app
