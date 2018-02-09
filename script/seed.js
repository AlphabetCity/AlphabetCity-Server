const db = require('../server/db')
const path = require('path')
const {
  User,
  Letter,
  LetterCategory,
  Word
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
      userName: 'Omri',
      email: 'cody@email.com',
      password: '123',
      score: 549
    }),
    User.create({
      userName: 'Corey',
      email: 'murphy@email.com',
      password: '123',
      score: 2329
    }),
    User.create({
      userName: 'Cassio',
      email: 'eetai@email.com',
      password: '123',
      score: 3422
    }),
    User.create({
      userName: 'Evan Bacon',
      email: 'robin@email.com',
      password: '123',
      score: 8443
    }),
    User.create({
      userName: `Abel`,
      email: 'abel@email.com',
      password: '123',
      score: 5234
    }),
    User.create({
      userName: 'Daniela',
      email: 'vanessa@email.com',
      password: '123',
      score: 500
    }),
    User.create({
      userName: 'Diana',
      email: 'jacque@email.com',
      password: '123',
      score: 783
    }),
    User.create({
      userName: 'Allen',
      email: 'diana@email.com',
      password: '123',
      score: 200
    }),
    User.create({
      userName: 'Eetai',
      email: 'daniela@email.com',
      password: '123',
      score: 2343
    }),
    User.create({
      userName: 'Josh Luria',
      email: 'allen@email.com',
      password: '123',
      score: 9549
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
    ,
    Letter.update({
      latitude: 40.8969,
      longitude: -75.0898
    },
      {
        where: {
          id: 12
        }
      })
    ,
    Letter.update({
      latitude: 40.9101,
      longitude: -74.8383
    },
      {
        where: {
          id: 13
        }
      })
    ,
    Letter.update({
      latitude: 40.0234,
      longitude: -73.1234
    },
      {
        where: {
          id: 14
        }
      })
    ,
    Letter.update({
      latitude: 41.7755,
      longitude: -72.8383
    },
      {
        where: {
          id: 15
        }
      })
    ,
    Letter.update({
      latitude: 42.6969,
      longitude: -70.9876
    },
      {
        where: {
          id: 16
        }
      })
    ,
    Letter.update({
      latitude: 46.0987,
      longitude: -80.6918
    },
      {
        where: {
          id: 17
        }
      })
    ,
    Letter.update({
      latitude: 45.0324,
      longitude: -81.5678
    },
      {
        where: {
          id: 18
        }
      })
    ,
    Letter.update({
      latitude: 45.0324,
      longitude: -81.5678
    },
      {
        where: {
          id: 19
        }
      })
    ,
    Letter.update({
      latitude: 43.8735,
      longitude: -82.87492
    },
      {
        where: {
          id: 20
        }
      })
    ,
    Letter.update({
      latitude: 42.8748,
      longitude: -81.5454
    },
      {
        where: {
          id: 21
        }
      })
    ,
    Letter.update({
      latitude: 40.6055,
      longitude: -71.7392
    },
      {
        where: {
          id: 22
        }
      })
    ,
    Letter.update({
      latitude: 45.5273,
      longitude: -69.9119
    },
      {
        where: {
          id: 23
        }
      })
    ,
    Letter.update({
      latitude: 46.0987,
      longitude: -79.0033
    },
      {
        where: {
          id: 24
        }
      })
    ,
    Letter.update({
      latitude: 45.0626,
      longitude: -79.5022
    },
      {
        where: {
          id: 25
        }
      })
    ,
    Letter.update({
      latitude: 42.929,
      longitude: -80.5398
    },
      {
        where: {
          id: 26
        }
      })
    ,
    Letter.update({
      latitude: 40.8763,
      longitude: -83.98237
    },
      {
        where: {
          id: 27
        }
      })
    ,
    Letter.update({
      latitude: 39.5625,
      longitude: -69.5653
    },
      {
        where: {
          id: 28
        }
      })
    ,
    Letter.update({
      latitude: 43.3456,
      longitude: -73.5455
    },
      {
        where: {
          id: 29
        }
      })
    ,
    Letter.update({
      latitude: 43.5675,
      longitude: -73.5675
    },
      {
        where: {
          id: 30
        }
      })
    ,
    Letter.update({
      latitude: 41.536,
      longitude: -74.544
    },
      {
        where: {
          id: 31
        }
      })
    ,
    Letter.update({
      latitude: 40.6749,
      longitude: -74.3425
    },
      {
        where: {
          id: 32
        }
      })
    ,
    Letter.update({
      latitude: 41.54665,
      longitude: -73.4353
    },
      {
        where: {
          id: 33
        }
      })
    ,
    Letter.update({
      latitude: 40.5625,
      longitude: -72.6577
    },
      {
        where: {
          id: 34
        }
      })

  ])

  console.log(`updated ${letters.length}  letters`)


  console.log(`seeded ${letterCategories.length} letter categories`)

  const words = await Promise.all([
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 1,
      word: "can"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 2,
      word: "aa"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 3,
      word: "you"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 1,
      word: "just"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 2,
      word: "leave"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 3,
      word: "me"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 4,
      word: "stand"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 5,
      word: "alone"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 6,
      word: "in"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 1,
      word: "an"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 2,
      word: "world"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 2,
      word: "that"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 3,
      word: "so"
    }),
    Word.create({
      latitude: 40.7419972,
      longitude: -73.9246364,
      userId: 4,
      word: "cold"
    })
  ])

  console.log(`seeded ${words.length} words`)


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
