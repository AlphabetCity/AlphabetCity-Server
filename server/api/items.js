const router = require('express').Router()
const { UserItem } = require('../db/models')
module.exports = router


router.get('/', (req, res, next) => {
  if (req.query.hidden) {
    UserItem.findAll()
      .then(allItems => allItems.filter(item => item.hidden.toString() === req.query.hidden))
      .then(selectedItems => res.json(selectedItems))
      .catch(next)
  }
  UserItem.findAll()
    .then((userItems) => res.json(userItems))
    .catch(next)
})

