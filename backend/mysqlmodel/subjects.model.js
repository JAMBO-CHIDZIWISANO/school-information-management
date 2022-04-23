const sql = require("../models/mysqldb")

//constructor 
const Subject = function(subject) {
    this.subjectCode = subject.subjectCode;
    this.subjectName = subject.subjectName;
}
//insrt a teacher into a system
Subject.create = (newSubject, result)=> {
    
    sql.query("INSERT INTO subjects SET ?", newSubject, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created subject: ", { subjectCode: res.insertSubjectCode, ...newSubject });
    result(null, { subjectCode: res.insertSubjectCode, ...newSubject });
        
    })
}

//retrieving one subject
Subject.findSubjectById = (subjectCode, result) => {
    sql.query(`SELECT subjectCode, subjectName FROM subjects WHERE subjectCode LIKE '%${subjectCode}%'`, (err, res) => {
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
      // not found teacher with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all subjects
  Subject.findAllSubjects = (subjectCode, result) => {
    let query = "SELECT subjectCode, subjectName FROM subjects";
    if (subjectCode) {
      query += ` WHERE subjectCode LIKE '%${subjectCode}%'`;
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
  Subject.updateSubjectById = (subjectCode, subject, result) => {
    
    sql.query(
      `UPDATE subjects SET subjectName = ? WHERE subjectCode LIKE '%${subjectCode}'`,
      
      [ subject.subjectName,  
        subjectCode],

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
        { subjectCode: subjectCode, ...subject });
        result(null, { subjectCode: subjectCode, ...subject });
      }
    );
  }

  //delete al subject by code
  Subject.deleteSubject = (subjectCode, result) => {
    
    sql.query("DELETE FROM subjects WHERE subjectCode = ?", 
    
    subjectCode, (err, res) => {
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
      console.log("deleted subject with subjectCode: ", subjectCode);
      result(null, res);
    });
  };
  
  //count all subjects
  Subject.countAllSubjects = (subjectCode, result) => {
    let query = "  select count(*) as subjects from subjects;";
    if (subjectCode) {
      query += ` WHERE subjectCode LIKE '%${subjectCode}%'`;
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


module.exports = Subject;