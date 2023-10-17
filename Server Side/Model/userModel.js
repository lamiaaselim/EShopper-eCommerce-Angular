const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config')

const UserSchema = new mongoose.Schema({
    idUser: {type: Number, required: true, unique: true},
    name:{ type: String, required: true },
    phone:{ type: String, required: true },
    email:{ type: String, required: true },
    password:{ type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

UserSchema.method("generateAuthToken", function(){
    const token = jwt.sign(
        {userId: this._id},
        config.get("jwtsecret"));
        return token;
})


//Collection
module.exports=mongoose.model('user', UserSchema);