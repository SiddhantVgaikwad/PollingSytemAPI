const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const port = process.env.PORT
const routes = require('./routes')

//database connection
require('./config/mongoose')



//Set Template Engine
app.set("view engine","ejs")



//middleware
app.use( bodyParser.urlencoded({ extended: true }) );
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


//headers*********************************************************************************************************************************

// Add headers before the routes are defined

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    // Pass to next layer of middleware
    next(); 
  });





//Routes
app.re
app.use('/',routes,(req,res) => {
  res.redirect('/allquestions')

})


app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})