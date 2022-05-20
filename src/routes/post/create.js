// const axios = require('axios')
// const e = require('express')

// module.exports = async (req, res) => {
//     const postInputs = req.body
    
//     const postData = {
//         userId: req.verifiedUser.user._id,
//         title: postInputs['postTitle'],
//         description: postInputs['postDescription']
//     }

//     // for (const key in postInputs) {
//     //     if (key.includes('questionTitle')) {
//     //         const questionNum = parseInt(key.split('questionTitle')[1])
            
//     //         /* If quizData question doesn't exist, add new questions until it does */
//     //         while(!quizData.questions[questionNum]) {
//     //             quizData.questions.push({})
//     //         }
//     //         quizData.questions[questionNum].title = quizInputs[key]
//     //     } else if (key.includes('questionAnswer')) {
//     //         const questionNum = parseInt(key.split('questionAnswer')[1])
//     //         quizData.questions[questionNum].correctAnswer = quizInputs[key]
//     //         quizData.questions[questionNum].order = questionNum + 1
//     //     }
//     // }

//     const mutation = `
//         mutation createPost($userId: String!, $title: String!, $description: String!) { 
//             createPost( userId: $userId, title: $title, description: $description )
//         }`

//     try {
//         const { data } = await axios.post(process.env.GRAPHQL_ENDPOINT, 
//             { 
//                 query: mutation,
//                 variables: postData
//             },
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 }
//             });   
//         console.log(data)
//         postId = data.data.createPost
//     } catch(e) {
//         e.response.data.errors.forEach(error => console.log(error))
//     }   

//     res.redirect(`/post/view${postId}`)
// }