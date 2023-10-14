const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    idUser: {type: Number, required: true, unique: true},
    name:{ type: String, required: true },
    phone:{ type: String, required: true },
    email:{ type: String, required: true },
    password:{ type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

//Collection
module.exports=mongoose.model('user', UserSchema);