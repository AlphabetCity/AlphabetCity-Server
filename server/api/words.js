const router = require('express').Router()
const { Word } = require('../db/models')
const accessControl = require('../utils/accessControl')
module.exports = router

router.get('/', (req, res, next) => {
  Word.findAll()
    .then(words => res.json(words))
    .catch(next)
  }
)

router.post('/', (req, res, next) => {
  Word.create(req.body)
    .then(word => res.json(word))
    .catch(next)
})
