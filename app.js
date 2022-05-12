const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db'); 
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
const { authenticate } = require('./src/middleware/auth');
const cookieParser = require('cookie-parser'); 
const path = require('path'); 
const app = express(); 


dotenv.config(); 

// Connecting Database 
connectDB()

app.use(cookieParser()); 

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))

app.use(express.urlencoded({ extended: true })); 

app.set('view engine', 'ejs')

// //Accessing Static Files with Middleware
// app.use(express.static(path.join(__dirname, 'public')))

// update location of views folder that res.render pulls from
app.set('views', path.join(__dirname, '/src/templates/views'));

app.use(authenticate);

/* Initialize Routes */
require("./src/routes")(app)

app.listen(process.env.PORT, () => {
    console.log(`Server now running on PORT: ${process.env.PORT}`)
});

// Home Route
// app.get('/', (req, res) => {
//     res.render('pages/index', {user:user})
// })

// // Profile Route
// app.get('/profile', (req, res) => {
//     res.render('pages/profile', {user:user})
// })

// // Login Route
// app.get('/login', (req, res) => {
//     res.render('pages/login', {user:user})
// })

// // Register Route
// app.get('/register', (req, res) => {
//     res.render('pages/register', {user:user})
// })

// // User Route
// app.get('/user', (req, res) => {
//     res.render('pages/user', {user:user})
// })

