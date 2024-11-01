const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    UserName:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    }
});

const UserModel = mongoose.model('users',UserSchema);
module.exports = UserModel;