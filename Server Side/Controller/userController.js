


exports.getAllUsers=(request, response, next)=>{
    response.status(200).json({data: [{id:1 , name:"Ahmed"},{id:2 , name:"Salah"}]});
}

exports.addUsers=(request, response, next)=>{
    response.status(201).json({data: "user added successfully"});
}

exports.updateUsers=(request, response, next)=>{
    response.status(200).json({data: "user updated successfully"});
}

exports.deleteUsers=(request, response, next)=>{
    response.status(200).json({data: "user deleted successfully"});
}