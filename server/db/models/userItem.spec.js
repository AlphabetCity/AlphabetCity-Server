const { expect } = require('chai')
const db = require('../index')
const { User, Item, UserItem } = require('./index')

//this doesn't work

describe('User Item join table', () => {
  beforeEach(() => {
    return db.sync({ force: true })
  })

  describe('hidden virtual', () => {
    let userItem1;
    let userItem2;

    beforeEach(async () => {

      const items = await Promise.all([
        Item.create({
          name: 'Peach',
          points: 1,
          threeJS: 'https://www.cgtrader.com/free-3d-models/food/fruit/apricot-lowpoly'
        }),
        Item.create({
          name: 'Apple',
          points: 14,
          threeJS: 'https://www.cgtrader.com/free-3d-print-models/art/scans-replicas/red-apple--3'
        }),
        Item.create({
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
        UserItem.update({
          longitude: 40.704761,
          latitude: -74.009133
        },
          {
            where: {
              id: 1
            }
          }),
        UserItem.update({
          longitude: 40.704966,
          latitude: -74.009491
        },
          {
            where: {
              id: 3
            }
          })
      ])


      await UserItem.findById(1)
        .then((item) => {
          userItem1 = item;
        })

      await UserItem.findById(2)
        .then((item) => {
          userItem2 = item;
        })

    })


      it('displays if item is hidden', function () {
        expect(userItem1.hidden).to.equal(true)
        expect(userItem2.hidden).to.equal(false)
      })
  })
})
