const db = require('../server/db')
const path = require('path')
const {
  User,
  Item,
  ItemCategory
} = require('../server/db/models')

const seed = async () => {
  await db.sync({force: true})
  console.log('db synced!')

  const itemCategories = await Promise.all([
    ItemCategory.create({
      name: 'Peach',
      points: 1,
      modelUrl: 'https://www.cgtrader.com/free-3d-models/food/fruit/apricot-lowpoly',
      emoji: 'https://cdn2.iconfinder.com/data/icons/fruity-vectors/1024/ColoredBeans_Kiwi2-256.png'

    }),
    ItemCategory.create({
      name: 'Apple',
      points: 14,
      modelUrl: 'https://www.cgtrader.com/free-3d-print-models/art/scans-replicas/red-apple--3',
      emoji: 'https://cdn2.iconfinder.com/data/icons/fruity-vectors/1024/ColoredBeans_Kiwi2-256.png'
    }),
    ItemCategory.create({
      name: 'Strawberry',
      points: 98,
      modelUrl: 'https://www.cgtrader.com/free-3d-models/food/fruit/strawberry-e58fc22b7ea3c5bc232d0c2229c6971c',
      emoji: 'https://cdn2.iconfinder.com/data/icons/fruity-vectors/1024/ColoredBeans_Kiwi2-256.png'
    }),
    ItemCategory.create({
      name: 'Plum',
      points: 45,
      modelUrl: 'https://www.cgtrader.com/free-3d-models/food/fruit/ameixa-plum-85k',
      emoji: 'https://cdn2.iconfinder.com/data/icons/fruity-vectors/1024/ColoredBeans_Kiwi2-256.png'
    }),
    ItemCategory.create({
      name: 'Pear',
      points: 54,
      modelUrl: 'https://www.cgtrader.com/free-3d-models/food/fruit/pea-5fd5f53a-f6e1-48df-9e15-7f762044f0ae',
      emoji: 'https://cdn2.iconfinder.com/data/icons/fruity-vectors/1024/ColoredBeans_Kiwi2-256.png'
    }),
    ItemCategory.create({
      name: 'Kiwi',
      points: 80,
      modelUrl: 'https://www.cgtrader.com/free-3d-models/food/fruit/kiwi-fruit-689f61f9-2f0b-465c-a929-fee05bd933aa',
      emoji: 'https://cdn2.iconfinder.com/data/icons/fruity-vectors/1024/ColoredBeans_Kiwi2-256.png'
    }),
    ItemCategory.create({
      name: 'Pineapple',
      points: 7,
      modelUrl: 'https://www.cgtrader.com/free-3d-models/food/fruit/pineapple-c52ea62d728247f7e12f1adb6a8cd212',
      emoji: 'https://cdn2.iconfinder.com/data/icons/fruity-vectors/1024/ColoredBeans_Kiwi2-256.png'
    })
  ])

  console.log(`seeded ${itemCategories.length} item categories`)

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
    }),
    User.create({
      userName: 'RobinCello',
      email: 'robin@email.com',
      password: '123'
    }),
    User.create({
      userName: 'AbelCheese',
      email: 'abel@email.com',
      password: '123'
    }),
    User.create({
      userName: 'VanessaCoffee',
      email: 'vanessa@email.com',
      password: '123'
    }),
    User.create({
      userName: 'JacquesGreene',
      email: 'jacque@email.com',
      password: '123'
    }),
    User.create({
      userName: 'Diana28',
      email: 'diana@email.com',
      password: '123'
    }),
    User.create({
      userName: 'Daniela52',
      email: 'daniela@email.com',
      password: '123'
    }),
    User.create({
      userName: 'Allen83',
      email: 'allen@email.com',
      password: '123'
    })
  ])

  console.log(`seeded ${users.length} users`)

  const items = await Promise.all([
    Item.update({
      latitude: 40.704761,
      longitude: -74.009133
    },
      {
        where: {
          id : 1
        }
      }),
    Item.update({
      latitude: 40.704966,
      longitude: -74.009491
    },
      {
        where: {
          id: 2
        }
      }),
    Item.update({
      latitude: 40.704572,
      longitude: -74.009200
    },
      {
        where: {
          id: 3
        }
      }),
    Item.update({
      latitude: 40.704392,
      longitude: -74.009090
    },
      {
        where: {
          id: 4
        }
      }),
    Item.update({
      latitude: 40.704132,
      longitude: -74.009255
    },
      {
        where: {
          id: 5
        }
      }),
    Item.update({
      latitude: 40.714299,
      longitude: -74.009122
    },
      {
        where: {
          id: 6
        }
      }),
    Item.update({
      latitude: 40.714951,
      longitude: -74.009132
    },
      {
        where: {
          id: 7
        }
      })
    ,
    Item.update({
      latitude: 40.7419971,
      longitude: -73.9246365
    },
      {
        where: {
          id: 8
        }
      })
    ,
    Item.update({
      latitude: 40.7419472,
      longitude: -73.9246539
    },
      {
        where: {
          id: 9
        }
      })
    ,
    Item.update({
      latitude: 40.7411973,
      longitude: -73.9243364
    },
      {
        where: {
          id: 10
        }
      })
    ,
    Item.update({
      latitude: 40.7419972,
      longitude: -73.9246364
    },
      {
        where: {
          id: 11
        }
      })
  ])

  console.log(`updated ${items.length}  items`)

}

seed()
  .then(() => {
    console.log('closing db connection')
    return db.close()
    console.log('db connection closed')
  })
  .catch(err => {
    console.error(err.message)
    console.error(err.stack)
    process.exitCode = 1
  })

console.log('seeding...')
