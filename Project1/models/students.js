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

module.exports = mongoose.model('Students', studentSchema);
