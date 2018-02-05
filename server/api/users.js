const router = require('express').Router()
const { User, Letter, LetterCategory } = require('../db/models')
module.exports = router


router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next)
})

router.get('/', (req, res, next) => {
  if (req.query.limit) {
    User.findAll({ limit: req.query.limit, order: [['score', 'DESC']] })
      .then((topUsers) => res.json(topUsers))
      .catch(next)
  } else {
    User.findAll()
      .then(users => res.json(users))
      .catch(next)
  }
})

router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(user => res.json(user))
    .catch(next)
})

router.put('/:userId', (req, res, next) => {
  User.update(req.body, {
    where: {
      id: req.params.userId
    }
  })
    .then(() => User.findById(req.params.userId))
    .then((user) => res.json(user))
    .catch(next)
})

router.delete('/:userId', (req, res, next) => {
  User.destroy({
    where: {
      id: req.params.userId
    }
  })
    .then(() => res.status(202).send('Deleted'))
    .catch(next)
})

// get all letters for a user, or query to see if hidden (if not hidden, letter is in satchel)

router.get('/:userId/letters', (req, res, next) => {
  if (req.query.hidden) {
    Letter.findAll({
      where: {
        userId: req.params.userId
      },
      include: [{ model: LetterCategory }]
    })
      .then(letters => letters.filter(letter => letter.hidden.toString() === req.query.hidden))
      .then(selectedLetters => res.json(selectedLetters))
      .catch(next)
  } else {
    Letter.findAll({
      where: {
        userId: req.params.userId
      },
      include: [{ model: LetterCategory }]
    })
      .then(letters => res.json(letters))
      .catch(next)
  }
})
