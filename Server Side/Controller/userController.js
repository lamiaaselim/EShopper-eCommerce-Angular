const UserSchema = require('./../Model/userModel');


exports.getUserById=(request, response, next)=>{
    UserSchema.findOne({_id:request.params.id})
        .then((data) => {
            if (data == null)
            throw new Error ("User dosen't exist")
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
}

exports.getAllUsers=(request, response, next)=>{
    UserSchema.find({})
        .then((data) => {
            response.status(200).json(data);
        }).catch((error) => {
            next(error)
        });
    // response.status(200).json({data: [{id:1 , name:"Ahmed"},{id:2 , name:"Salah"}]});
}

exports.addUsers=(request, response, next)=>{
    let newUser = new UserSchema({
        _id:request.body.id,
        name:request.body.name,
    });
    newUser.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newUser:data });
        })
        .catch((error)=>{next(error)});
    // response.status(201).json({data: "user added successfully"});
}

exports.updateUsers=(request, response, next)=>{
    UserSchema.updateOne({
        _id:request.body.id,
    },{
        $set:{name:request.body.name}
    })
        .then((data) => {
            response.status(200).json({data:"user updated successfully"});
        }).catch((error) => {
            next(error)
        });
    // response.status(200).json({data: "user updated successfully"});
}

exports.deleteUsers=(request, response, next)=>{
    const userId = request.params.id; // Assuming the ID is passed as a URL parameter

    UserSchema.findByIdAndDelete(userId)
        .then((deletedUSer) => {
            if (!deletedUSer) {
                throw new Error("User not found");
            }
            response.status(200).json({ message: "User deleted successfully" });
        })
        .catch((error) => {
            next(error);
        });

    // response.status(200).json({data: "user deleted successfully"});
}