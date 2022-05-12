// Import required info from graphql
const { GraphQLSchema, GraphQLObjectType } = require("graphql")

// Import queries
const queries = require('./queries')

// Define QueryType
const QueryType = new GraphQLObjectType({
    name: "QueryType",
    description: "Queries",
    fields: queries
})

module.exports = new GraphQLSchema ({ query: QueryType })