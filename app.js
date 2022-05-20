const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./src/db'); 
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');
const { authenticate } = require('./src/middleware/auth');
const cookieParser = require('cookie-parser'); 
const { postData } = require('./src/middleware/postData');
const { userData } = require('./src/middleware/userData'); 

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
app.use(authenticate);
app.use(userData); 
app.use(postData); 

app.set('view engine', 'ejs')
// update location of views folder that res.render pulls from
app.set('views', path.join(__dirname, '/src/templates/views'));


/* Initialize Routes */
require("./src/routes")(app)

app.listen(process.env.PORT, () => {
    console.log(`Server now running on PORT: ${process.env.PORT}`)
});



