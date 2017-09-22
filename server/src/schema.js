const {
  makeExecutableSchema
} = require('graphql-tools')

const { resolvers } = require('./resolvers')

const typeDefs = `
  type Lift {
    name: String
    type: String
    capacity: Int
    status: String
    manufacturer: String
    built: Int
    summer: Boolean
    night: Boolean
    elevation_gain: Boolean
    time: String
    hours: String
    updated: String
  }

  type Query {
    allLifts: [Lift]
  }
`

const schema = makeExecutableSchema({ typeDefs, resolvers })
module.exports = { schema }
