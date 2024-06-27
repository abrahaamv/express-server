const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (req, res) => {
  const users = await User.find({})

  users
    ? res.status(200).json(users)
    : res.status(404).end()
})

module.exports = usersRouter
