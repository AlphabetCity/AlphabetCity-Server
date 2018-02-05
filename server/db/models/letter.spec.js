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

      const letterCategories = await Promise.all([
        LetterCategory.create({
          name: 'A',
          points: 1
        }),
        LetterCategory.create({
          name: 'B',
          points: 3
        }),
        LetterCategory.create({
          name: 'C',
          points: 3
        }),
        LetterCategory.create({
          name: 'D',
          points: 2
        }),
        LetterCategory.create({
          name: 'E',
          points: 1
        }),
        LetterCategory.create({
          name: 'F',
          points: 4
        }),
        LetterCategory.create({
          name: 'G',
          points: 2
        }),
        LetterCategory.create({
          name: 'H',
          points: 4
        }),
        LetterCategory.create({
          name: 'I',
          points: 1
        }),
        LetterCategory.create({
          name: 'J',
          points: 8
        }),
        LetterCategory.create({
          name: 'K',
          points: 5
        }),
        LetterCategory.create({
          name: 'L',
          points: 1
        }),
        LetterCategory.create({
          name: 'M',
          points: 3
        }),
        LetterCategory.create({
          name: 'N',
          points: 1
        }),
        LetterCategory.create({
          name: 'O',
          points: 1
        }),
        LetterCategory.create({
          name: 'P',
          points: 3
        }),
        LetterCategory.create({
          name: 'Q',
          points: 10
        }),
        LetterCategory.create({
          name: 'R',
          points: 1
        }),
        LetterCategory.create({
          name: 'S',
          points: 1
        }),
        LetterCategory.create({
          name: 'T',
          points: 1
        }),
        LetterCategory.create({
          name: 'U',
          points: 1
        }),
        LetterCategory.create({
          name: 'V',
          points: 4
        }),
        LetterCategory.create({
          name: 'W',
          points: 4
        }),
        LetterCategory.create({
          name: 'X',
          points: 8
        }),
        LetterCategory.create({
          name: 'Y',
          points: 4
        }),
        LetterCategory.create({
          name: 'Z',
          points: 10
        }),
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
