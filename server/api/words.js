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

router.put('/', (req, res, next) => {
  Word.update(req.body, {
    where: {
      id: req.params.userId
    }
  })
    .then(word => res.json(word))
    .catch(next)
})

router.delete('/:wordId', (req, res, next) => {
  Word.destroy({
    where: {
      id: req.params.wordId
    }
  })
    .then(() => res.status(202).send('Deleted'))
    .catch(next)
})

