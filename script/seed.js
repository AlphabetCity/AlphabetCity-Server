const db = require('../server/db')
const path = require('path')
const {
  User,
  Letter,
  LetterCategory
} = require('../server/db/models')

const seed = async () => {
  await db.sync({ force: true })
  console.log('db synced!')

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

  console.log(`seeded ${letterCategories.length} letter categories`)

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

  const letters = await Promise.all([
    Letter.update({
      latitude: 40.704761,
      longitude: -74.009133
    },
      {
        where: {
          id: 1
        }
      }),
    Letter.update({
      latitude: 40.7829,
      longitude: -73.9654
    },
      {
        where: {
          id: 2
        }
      }),
    Letter.update({
      latitude: 40.7589,
      longitude: -73.9851
    },
      {
        where: {
          id: 3
        }
      }),
    Letter.update({
      latitude: 40.705576,
      longitude: -74.013421
    },
      {
        where: {
          id: 4
        }
      }),
    Letter.update({
      latitude: 40.7532,
      longitude: -73.9823
    },
      {
        where: {
          id: 5
        }
      }),
    Letter.update({
      latitude: 40.767997,
      longitude: -73.981934
    },
      {
        where: {
          id: 6
        }
      }),
    Letter.update({
      latitude: 40.7480,
      longitude: -74.0048
    },
      {
        where: {
          id: 7
        }
      })
    ,
    Letter.update({
      latitude: 40.7359,
      longitude: -73.9911
    },
      {
        where: {
          id: 8
        }
      })
    ,
    Letter.update({
      latitude: 40.7587,
      longitude: -73.9787
    },
      {
        where: {
          id: 9
        }
      })
    ,
    Letter.update({
      latitude: 40.7127,
      longitude: -74.0134
    },
      {
        where: {
          id: 10
        }
      })
    ,
    Letter.update({
      latitude: 40.7419972,
      longitude: -73.9246364
    },
      {
        where: {
          id: 11
        }
      })
  ])

  console.log(`updated ${letters.length}  items`)

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
