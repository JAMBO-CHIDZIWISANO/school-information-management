const sql = require("../models/mysqldb")

//constructor 
const TeacherSubject = function(teachers) {
    this.teacherId = teachers.teacherId;
    this.subjectCode = teachers.subjectCode;
}
//insrt a student and subject id into a system
TeacherSubject.create = (newteacherSubject, result)=> {
    
    sql.query("INSERT INTO teacher_subjects SET ?", newteacherSubject, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created subject: ", { teacherId: res.insertTeacherId, ...newteacherSubject });
    result(null, { teacherId: res.insertTeacherId, ...newteacherSubject });
        
    })
}

//retrieving one subject
TeacherSubject.findTSubjectById = (teacherId, result) => {
    sql.query(`SELECT teacherId, subjectCode FROM teacher_subjects WHERE teacherId LIKE '%${teacherId}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found subject: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found subject with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all subjects
  TeacherSubject.findAllTSubjects = (teacherId, result) => {
    let query = "SELECT teacherId, subjectCode FROM teacher_subjects";
    if (teacherId) {
      query += ` WHERE teacherId LIKE '%${teacherId}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("subjects: ", res);
      result(null, res);
    });
  };

  //update subject by their id
  TeacherSubject.updateTSubjectById = (teacherId, tsubject, result) => {
    
    sql.query(
      `UPDATE teacher_subjects SET subjectCode = ? WHERE teacherId LIKE '%${teacherId}'`,
      
      [ tsubject.subjectCode,  
        teacherId],

      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found subject with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated subject: ", 
        { teacherId: teacherId, ...tsubject });
        result(null, { teacherId: teacherId, ...tsubject });
      }
    );
  }

  //delete al subject by code
  TeacherSubject.deleteTSubject = (studentId, result) => {
    
    sql.query("DELETE FROM teacher_subjects WHERE teacherId = ?", 
    
    teacherId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found subject with the code
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted subject with teacherId: ", teacherId);
      result(null, res);
    });
  };
  
  


module.exports = TeacherSubject;