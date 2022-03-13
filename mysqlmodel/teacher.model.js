const sql = require("../models/mysqldb")

//constructor 
const Teacher = function(teacher) {
    this.teacherId = teacher.teacherId;
    this.firstname = teacher.firstname;
    this.middlename = teacher.middlename;
    this.lastname = teacher.lastname;
    this.gender = teacher.gender;
    this.qualification = teacher.qualification;
    this.joinDate = teacher.joinDate;

    
}
//insrt a teacherinto a system
Teacher.create = (newTeacher, result)=> {
    
    sql.query("INSERT INTO teachers SET ?", newTeacher, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created teacher: ", { teacherId: res.insertTeacherId, ...newTeacher });
    result(null, { teacherId: res.insertTeacherId, ...newTeacher });
        
    })
}

module.exports = Teacher;