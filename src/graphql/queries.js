const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, QuizType, SubmissionType, PostType } = require('./types')
const { User, Post } = require('../models')




const userById = {
    type: UserType,
    description: 'Query user submission by id',
    args: {
        id: { type: GraphQLString }
    },
    async resolve(parent, args) {
        return User.findById(args.id)
    }
}

const postById = {
    type: PostType,
    description: 'Query post submission by id',
    args: {
        id: { type: GraphQLString }
    },
    async resolve(parent, args) {
        return Post.findById(args.id)
    }
}

const posts = {
    type: new GraphQLList(PostType),
    description: 'Query all posts by user in the database',
    resolve(parent, args) {
        return Post.find()
    }
}


module.exports = { userById, postById, posts }