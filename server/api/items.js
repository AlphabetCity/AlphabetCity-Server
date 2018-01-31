const router = require('express').Router()
const { UserItem } = require('../db/models')
module.exports = router


router.get('/', (req, res, next) => {
  UserItem.findAll()
    .then((userItems) => res.json(userItems))
    .catch(next)
});

router.get('/hidden', (req, res, next) => {
  UserItem.findAll()
    .then((allItems) => allItems.filter(item => item.hidden))
    .then(hiddenItems => res.json(hiddenItems))
    .catch(next)
});

