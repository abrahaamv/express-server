const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', async (req, res) => {
  const notes = await Note.find({})

  notes
    ? res.status(200).json(notes)
    : res.status(404).end()
})

notesRouter.get('/:id', async (req, res) => {
  const note = await Note.findById(req.params.id)

  note
    ? res.status(200).json(note)
    : res.status(404).end()
})

notesRouter.post('/', async (req, res) => {
  const newNote = new Note({
    content: req.body.content,
    important: req.important || false
  })

  const savedNote = await newNote.save()

  savedNote
    ? res.status(200).json(savedNote)
    : res.status(400).end()
})

module.exports = notesRouter
