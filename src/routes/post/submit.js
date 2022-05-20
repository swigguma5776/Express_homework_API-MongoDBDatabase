const axios = require('axios')
const e = require('express')

module.exports = async (req, res) => {
    const postInputs = req.body
    
    const postData = {
        userId: req.verifiedUser.user._id,
        title: postInputs['title'],
        description: postInputs['description']
    }


    const mutation = `
        mutation createPost($userId: String!, $title: String!, $description: String!) { 
            createPost( userId: $userId, title: $title, description: $description )
        }`

    try {
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT, 
            { 
                query: mutation,
                variables: postData
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });   
        console.log(data)
        console.log(postData)
        console.log('you are creating!')
    } catch(e) {
        e.response.data.errors.forEach(error => console.log(error))
    }   

    res.redirect(`/`)
}