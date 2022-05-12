const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db'); 
const { graphqlHTTP } = require('express-graphql')
const schema = require('./src/graphql/schema')
const path = require('path'); 
const app = express(); 


dotenv.config(); 

// Connecting Database 
connectDB()

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(process.env.PORT, () => {
    console.log(`Server now running on PORT: ${process.env.PORT}`)
});


app.set('view engine', 'ejs')

const user = {
    firstName: 'Alex',
    lastName: 'Swiggum'
}

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//     res.send('hello world')
//   })

// Home Route
app.get('/', (req, res) => {
    res.render('pages/index', {user:user})
})

// Profile Route
app.get('/profile', (req, res) => {
    res.render('pages/profile', {user:user})
})

// Login Route
app.get('/login', (req, res) => {
    res.render('pages/login', {user:user})
})

// Register Route
app.get('/register', (req, res) => {
    res.render('pages/register', {user:user})
})

// User Route
app.get('/user', (req, res) => {
    res.render('pages/user', {user:user})
})


//Accessing Static Files with Middleware
app.use(express.static(path.join(__dirname, 'public')))