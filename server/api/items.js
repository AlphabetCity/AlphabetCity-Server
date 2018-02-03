const router = require('express').Router()
const { Item, ItemCategory } = require('../db/models')
module.exports = router


router.get('/', (req, res, next) => {
  if (req.query.hidden) {
    Item.findAll({ include: [{ model: ItemCategory }]})
      .then(allItems => allItems.filter(item => item.hidden.toString() === req.query.hidden))
      .then(selectedItems => res.json(selectedItems))
      .catch(next)
  } else {
    Item.findAll({ include: [{ model: ItemCategory }]})
      .then((userItems) => res.json(userItems))
      .catch(next)
  }
})

// update single item
router.put('/:itemId', (req, res, next) => {
  Item.update(req.body, {
    where: {
      id: req.params.itemId
    }
  })
    .then(() => res.sendStatus(200))
    .catch(next)
})
