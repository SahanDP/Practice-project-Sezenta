const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

//importing routes
const studentRoutes = require('./routes/students');

//app middleware
app.use(bodyParser.json());

//route middleware
app.use(studentRoutes);

const PORT = 8000;
const DB_URL = 'mongodb+srv://SDP:SDP1234@mernapp.cc5whz4.mongodb.net/?retryWrites=true&w=majority';

//fixed the warning
mongoose.set('strictQuery', false);

mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB Connected");
})
.catch((err)=>{
    console.log("DB Connection Error", err);
});

app.listen(PORT, ()=>{
    console.log("App is running");
});


