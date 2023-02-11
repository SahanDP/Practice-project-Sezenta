//db model must creat through mongoose
const mongoose = require('mongoose');

//schema or studentSchema?
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    index:{
        type:Number,
        required:true
    }
});

//we need to use this model in routes, so export it 
//Students is the db name
module.exports = mongoose.model('Students', studentSchema);
