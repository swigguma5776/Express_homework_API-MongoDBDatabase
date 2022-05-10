const express = require('express');
const path = require('path'); 
const app = express(); 
const port = 3000; 

app.listen(port, ()=>{
    console.log(`Hello World app listening at port: ${port}`)
})


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