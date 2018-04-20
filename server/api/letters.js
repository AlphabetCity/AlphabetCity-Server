const router = require('express').Router()
const { Letter, LetterCategory } = require('../db/models')
const { getRandomLetterId } = require('../utils/letterIdFrequency')
module.exports = router

LAT_DISPLACEMENT = 0.004
LONG_DISPLACEMENT = 0.004
NORMALIZATION = 0.002

router.post('/', async (req, res, next) => {
  let { latitude, longitude } = req.body
  let letter, letterCategoryId
  try {
    for (let i = 0; i < 40; i++) {
      letterCategoryId = getRandomLetterId()
      letter = await LetterCategory.findById(letterCategoryId)
      await Letter.create({
        letterCategoryId,
        latitude: Math.random() * LAT_DISPLACEMENT - NORMALIZATION + Number(latitude),
        longitude: Math.random() * LONG_DISPLACEMENT - NORMALIZATION + Number(longitude),
        displacementDistance: Math.random() * letter.points,
        displacementBearing: Math.random() * 360
      })
    }
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
  }
})

router.get('/', (req, res, next) => {
  if (req.query.hidden) {
    Letter.findAll({ include: [{ model: LetterCategory }] })
      .then(allLetters =>
        allLetters.filter(
          letter => letter.hidden.toString() === req.query.hidden
        )
      )
      .then(selectedLetters => res.json(selectedLetters))
      .catch(next)
  } else {
    Letter.findAll({ include: [{ model: LetterCategory }] })
      .then(userLetters => res.json(userLetters))
      .catch(next)
  }
})

// update single letter
router.put('/:letterId', (req, res, next) => {
  Letter.update(req.body, {
    where: { id: req.params.letterId }
  })
    .then(() => {
      return Letter.findOne({
        where: { id: req.params.letterId },
        include: [{ model: LetterCategory }]
      })
    })
    .then(letter => res.json(letter))
    .catch(next)
})
