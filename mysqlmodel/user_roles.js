const sql = require("../models/mysqldb.js");

const User_roles = function(user_roles){
    this.userId = user_roles.userId;
    this.roleId = user_roles.roleId;
}

//insrt a teacherinto a system
User_roles.add = (newUser_roles, result)=> {
    
    sql.query("INSERT INTO user_roles SET ?", newUser_roles, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    //console.log("created user_roles: ", { teacherId: res.insertTeacherId, ...newTeacher });
    result(null, { ...newUser_roles });
        
    })
}