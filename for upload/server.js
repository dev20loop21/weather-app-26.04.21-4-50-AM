// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

//Require body-parser
const bodyParser=require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors=require("cors");
app.use(Cors());

// Initialize the main project folder
app.use(express.static('website'));



//create server
const port = 8080;

app.listen(port, ()=>{
    console.log(`Server Runing On: http://localhost:${port}`);

})
//create a get route
app.get('/getAll', (request, response)=>{
    response.send(projectData).status(200).end();
});

//create a post route
app.post('/postData', (request, response)=>{
    projectData={
        temp:request.body.temp,
        date:request.body.date,
        content:request.body.content
    };
    response.send(projectData).status(200).end;
})




