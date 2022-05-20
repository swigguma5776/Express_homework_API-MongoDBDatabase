const axios = require('axios');
const { GraphQLID } = require('graphql');

const postData = async (req, res, next) => {

    const query = `
        query posts {
            posts{
                title,
                description
                user{
                    username
            }
        }
    }`

    let response = {}
    try {
        response = await axios.post(process.env.GRAPHQL_ENDPOINT,
            {query},
            {
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
    } catch(e) {
        e.response.data.errors.forEach(err =>{
            console.log(err.locations, err.message)
        })
    }
    
    console.log('We are in PostData middleware')
    req.posts = response.data.data.posts ?? []
    console.log(response)
    next()
};
module.exports = { postData }