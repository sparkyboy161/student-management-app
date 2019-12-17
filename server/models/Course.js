const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name:{
        type:String,
        default: ''
    },
    teacher:{
        type:String,
        default: ''
    },
    location:{
        type:String,
        default: ''
    },
    description:{
        type:String,
        default: ''
    },
    duration:{
        type:Number,
        default: 24
    },
    maximumRegister:{
        type:Number,
        default: 80
    },
    currentRegister:{
        type:Number,
        default: 0
    },

},{
    timestamps: true
});

const Course = mongoose.model('Course',CourseSchema)

module.exports = Course;