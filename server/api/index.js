
const router = require('express').Router()
module.exports = router


router.use('/users', require('./users'))
router.use('/letters', require('./letters'))
router.use('/words', require('./words'))


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
