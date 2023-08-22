/*This line imports the 'express' module,
 which is a framework for building web applications using Node.js. 
 It provides various features and utilities to simplify 
 the process of handling HTTP requests, routing, middleware, and more.*/
const express = require('express');

//get databse function that we made in db.js

const connectDB = require('./config/db');

/*This line creates an instance of the Express application 
by calling the imported 'express' function. 
This instance represents your web application 
and will be used to define routes, handle requests, and set up middleware. */
const app = express();

//connect database
connectDB();

// init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000; //default to 5000 when there is no en-variable  set

//callback
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));
