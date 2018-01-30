const { expect } = require('chai')
const db = require('../index')
const { User, Item, UserItem } = require('./index')

//this doesn't work

describe('User Item join table', () => {
  before(() => {
    return db.sync({ force: true })
  })

  describe('hidden virtual', () => {
    let newItemsInWorld;
    beforeEach(() => {
      return User.bulkCreate({
        userName: 'Bob',
        email: 'bob@bob.com',
        password: '123asd'
      },
        {
          userName: 'Mary',
          email: 'Mary@mary.com',
          password: '12hssd'
        })
        .then(() => {
          return Item.bulkCreate({
            name: 'Banana',
            points: 7
          },
            {
              name: 'Apple',
              points: 12
            })
        })
        .then(() => {
          return UserItem.bulkCreate(
            {
              longitude: 73.73647,
              latitude: -30.12202,
              userId: 2,
              itemId: 2
            },
            {},
            {
              longitude: 43.72347,
              latitude: -60.12402,
              userId: 1,
              itemId: 1
            })
            .then(itemsArr => {
              newItemsInWorld = itemsArr;
              console.log(newItemsInWorld);
            })
            .catch(err => console.log(err));
        })
    })

    it('displays if item is hidden', function () {
      expect(newItemsInWorld[0].hidden).to.equal(true)
      expect(newItemsInWorld[1].hidden).to.equal(false)
      expect(newItemsInWorld[2].hidden).to.equal(true)
    })
  })
})
