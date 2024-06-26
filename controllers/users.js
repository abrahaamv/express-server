const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (req, res) => {
  const { name, username, password } = req.body

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    name,
    username,
    passwordHash
  })

  const savedUser = await user.save()
  savedUser
    ? res.status(201).json(savedUser)
    : res.status(400).end()
})

module.exports = usersRouter
