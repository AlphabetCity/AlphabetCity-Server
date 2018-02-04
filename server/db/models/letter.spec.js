const { expect } = require('chai')
const db = require('../index')
const { User, Letter, LetterCategory } = require('./index')

//this doesn't work

describe('User Letter join table', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('hidden virtual', () => {
    let userLetter1;
    let userLetter2;

    beforeEach(async () => {

      const letters = await Promise.all([
        LetterCategory.create({
          name: 'Peach',
          points: 1,
          threeJS: 'https://www.cgtrader.com/free-3d-models/food/fruit/apricot-lowpoly'
        }),
        LetterCategory.create({
          name: 'Apple',
          points: 14,
          threeJS: 'https://www.cgtrader.com/free-3d-print-models/art/scans-replicas/red-apple--3'
        }),
        LetterCategory.create({
          name: 'Strawberry',
          points: 98,
          threeJS: 'https://www.cgtrader.com/free-3d-models/food/fruit/strawberry-e58fc22b7ea3c5bc232d0c2229c6971c'
        })
      ])

      const users = await Promise.all([
        User.create({
          userName: 'BigSean',
          email: 'cody@email.com',
          password: '123'
        }),
        User.create({
          userName: 'MurphyLee',
          email: 'murphy@email.com',
          password: '123'
        }),
        User.create({
          userName: 'EetaiMagic',
          email: 'eetai@email.com',
          password: '123'
        })
      ])

      await Promise.all([
        Letter.update({
          longitude: 40.704761,
          latitude: -74.009133
        },
          {
            where: {
              id: 1
            }
          }),
        Letter.update({
          longitude: 40.704966,
          latitude: -74.009491
        },
          {
            where: {
              id: 3
            }
          })
      ])

      await Letter.findById(1)
        .then((letter) => {
          userLetter1 = letter;
        })

      await Letter.findById(2)
        .then((letter) => {
          userLetter2 = letter;
        })

    })

    it('displays if letter is hidden', function () {
      expect(userLetter1.hidden).to.equal(true)
      expect(userLetter2.hidden).to.equal(false)
    })
  })
})
