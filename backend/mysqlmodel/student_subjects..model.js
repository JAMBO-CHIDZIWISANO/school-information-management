const sql = require("../models/mysqldb")

//constructor 
const StudentSubject = function(stsubject) {
    this.studentId = stsubject.studentId;
    this.subjectCode = stsubject.subjectCode;
}
//insrt a student and subject id into a system
StudentSubject.create = (newStudentSubject, result)=> {
    
    sql.query("INSERT INTO student_subjects SET ?", newStudentSubject, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created subject: ", { studentId: res.insertStudentId, ...newStudentSubject });
    result(null, { studentId: res.insertStudentId, ...newStudentSubject });
        
    })
}

//retrieving one subject
StudentSubject.findSSubjectById = (studentId, result) => {
    sql.query(`SELECT studentId, subjectCode FROM student_subjects WHERE studentId LIKE '%${studentId}%'`, (err, res) => {
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
  StudentSubject.findAllSSubjects = (studentId, result) => {
    let query = "SELECT studentId, subjectCode FROM student_subjects";
    if (studentId) {
      query += ` WHERE studentId LIKE '%${studentId}%'`;
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
  StudentSubject.updateSSubjectById = (studentId, ssubject, result) => {
    
    sql.query(
      `UPDATE student_subjects SET subjectCode = ? WHERE studentId LIKE '%${studentId}'`,
      
      [ ssubject.subjectCode,  
        studentId],

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
        { studentId: studentId, ...ssubject });
        result(null, { studentId: studentId, ...ssubject });
      }
    );
  }

  //delete al subject by code
  StudentSubject.deleteSSubject = (studentId, result) => {
    
    sql.query("DELETE FROM student_subjects WHERE studentId = ?", 
    
    studentId, (err, res) => {
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
      console.log("deleted subject with studentId: ", studentId);
      result(null, res);
    });
  };
  
  


module.exports = StudentSubject;