const UserSchema = require('./../Model/userModel');


exports.getUserById=(request, response, next)=>{
    UserSchema.findOne({idUser:request.params.id})
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
        idUser:request.body.idUser,
        name:request.body.name,
        phone:request.body.phone,
        email:request.body.email,
        password:request.body.password,
        role:request.body.role,
    });
    newUser.save()
        .then((data) => {
            response.status(201).json({data:"data added successfully",newUser:data });
        })
        .catch((error)=>{next(error)});
}

exports.updateUsers =(request, response, next)=>{
    UserSchema.findOneAndUpdate(
        {idUser:request.body.idUser},
        { $set:{name:request.body.name}},
        { new: true } // to return the updated document
    )
    .then(updatedUser => {
        if (updatedUser) {
            response.status(200).json({ message: "User updated successfully" });
        } else {
            response.status(404).json({ message: "ID doesn't exist" });
        }
    })
    .catch(error => {
        console.error("Update error: ", error);
        next(error);
    });
}

exports.deleteUsers=(request, response, next)=>{
    const userId = request.params.id; // Assuming the ID is passed as a URL parameter

    UserSchema.findOneAndDelete({idUser: userId},)
        .then((deletedUSer) => {
            if (!deletedUSer) {
                throw new Error("User not found");
            }
            response.status(200).json({ message: "User deleted successfully" });
        })
        .catch((error) => {
            next(error);
        });
}