const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    //_id:mongoose.Types.ObjectId,
    name:String,
    phone:String,
    email:String,
    message:String,
});

//Collection
module.exports=mongoose.model('contact', ContactSchema);