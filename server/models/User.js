const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
        type:String,
        default: ''
    },
    lastName:{
        type:String,
        default: ''
    },
    email:{
        type:String,
        default: ''
    },
    password:{
        type:String,
        default: ''
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    registeredSubjects: {
        type: Array,
        default: ''
    }
});

 UserSchema.methods.generateHash = function(password){
     return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null);
 }
 
 UserSchema.methods.validPassword = function(password){
     return bcrypt.compareSync(password, this.password);
 }

const User = mongoose.model('User',UserSchema)

module.exports = User;