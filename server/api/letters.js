const router = require('express').Router()
const { Letter, LetterCategory } = require('../db/models')
module.exports = router


router.get('/', (req, res, next) => {
  if (req.query.hidden) {
    Letter.findAll({ include: [{ model: LetterCategory }] })
      .then(allLetters => allLetters.filter(letter => letter.hidden.toString() === req.query.hidden))
      .then(selectedLetters => res.json(selectedLetters))
      .catch(next)
  } else {
    Letter.findAll({ include: [{ model: LetterCategory }] })
      .then((userLetters) => res.json(userLetters))
      .catch(next)
  }
})

// update single letter
router.put('/:letterId', (req, res, next) => {
  Letter.update(req.body, {
    where: {
      id: req.params.letterId
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next)
})
