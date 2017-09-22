const lifts = require('../../src/lifts.json')

const resolvers = {
  Query: {
    lifts: () => {
      return lifts
    }
  }
}


module.exports = resolvers
