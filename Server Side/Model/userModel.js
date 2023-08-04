const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    phone:Number,
    email:String,
});

//Collection
module.exports=mongoose.model('user', UserSchema);