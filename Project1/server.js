//importing packages
const express = require('express'); 
const mongoose = require('mongoose');
const bodyParser = require('body-parser');  //we send data in json format, body-parser converts that into js
const cors = require('cors');

//invoking express***
const app = express(); 

//importing routes ***from where comes the studentRoutes?
const studentRoutes = require('./routes/students'); 

//app middleware
app.use(bodyParser.json()); 
app.use(cors());

//route middleware
app.use(studentRoutes);

//assigning a port to app to run on
const PORT = 8000; 

//connection configuration-1
const DB_URL = 'mongodb+srv://SDP:SDP1234@mernapp.cc5whz4.mongodb.net/?retryWrites=true&w=majority';

//fixed the warning
mongoose.set('strictQuery', false);

//connection configuration-1
mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB Connected");  //learn js promises 
})
.catch((err)=>{
    console.log("DB Connection Error", err);
});

//listen is a express function***
app.listen(PORT, ()=>{
    console.log("App is running");
});



//Make a model(models/student.js)
//Make routes(CRUD)
