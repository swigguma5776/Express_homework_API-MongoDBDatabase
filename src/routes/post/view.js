const axios = require('axios')

module.exports = async (req, res) => {
    const id = req.params.id
    let postData = {}

    const query = `
        query posts { 
            posts {
                id,
                title,
                description,
                user{
                    username
                }
            }
        }`

    try {
        const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT,
            {
                query
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        postData = data.data.posts

        console.log(postData)

        // postData.questions = quizData.questions.sort((a, b) => a - b)

        console.log(`This is your post data: ${postData}`)
        res.render('post', { user: req.verifiedUser.user, posts: postData });
    } catch (e) {
        console.log(e.response.data.errors)
        res.redirect('/')
    }

}