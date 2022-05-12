const { GraphQLList, GraphQLID, GraphQLString } = require('graphql')
const { UserType, QuizType, SubmissionType, PostType } = require('./types')
const { User, Post } = require('../models')




const users = {
    type : new GraphQLList(UserType), 
    description: 'Query all users in the database',
    resolve( parent, args ) {
        return User.find()
    }
}

const user = {
    type : UserType, 
    description: 'Query user by id',
    args: {
        id: { type: GraphQLID }
    },
    resolve( parent, args ) {
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


module.exports = { users, user, postById, posts }