const sql = require("../models/mysqldb")

//constructor 
const Subject = function(subject) {
    this.subjectCode = subject.subjectCode;
    this.subjectName = subject.subjectName;
    this.teacherId = subject.teacherId;
}

//insert a subject into a system
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
    sql.query(`SELECT subjectCode FROM subjects WHERE subjectCode = '${subjectCode}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res) {
        console.log("found subject: ", res);
        result(null, res);
        return;
      }
      // not found subject with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving one total
Subject.findTotalById = (subjectCode, result) => {
  sql.query(`SELECT totalId, totalScore from totals where subjectCode = '${subjectCode}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res) {
      console.log("found total: ", res);
      result(null, res);
      return;
    }
    // not found subject with the id
    result({ kind: "not_found" }, null);
  });
};

  //retrieve students Id who take this subjects
  Subject.findStudentsIdBySubjectCode = (subjectCode, result) => {
    sql.query(`SELECT ss.studentId from students s join student_subjects ss on s.studentId=ss.studentId join subjects b on ss.subjectCode=b.subjectCode where ss.subjectCode='${subjectCode}' group by s.studentId`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res) {
        console.log("found students: ", res);
        result(null, res);
        return;
      }
      // not found subject with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieve all students who take this subjects
  Subject.findStudentsWhoTakeSubject = (subjectCode, result) => {
    sql.query(`SELECT ss.studentId, s.firstname,s.surname from students s join student_subjects ss on s.studentId=ss.studentId join subjects b on ss.subjectCode=b.subjectCode where ss.subjectCode ='${subjectCode}'group by s.studentId;`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res) {
        console.log("found students: ", res);
        result(null, res);
        return;
      }
      // not found subject with the id
      result({ kind: "not_found" }, null);
    });
  };
  

  //retrieve students grades who take this subjects of subjectCode
  Subject.findStudentsGradesBySubjectCode = (subjectCode, result) => {
    sql.query(`SELECT m.markId, s.firstname, s.studentId, su.subjectCode, m.type, t.termName,m.student_score, o.totalScore from students s join student_marks m on s.studentId=m.studentId join subjects su on m.subjectCode=su.subjectCode join totals o on o.subjectCode = su.subjectCode join terms t on t.termId=m.termId where m.subjectCode='${subjectCode}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res) {
        console.log("found students: ", res);
        result(null, res);
        return;
      }
      // not found subject with the id
      result({ kind: "not_found" }, null);
    });
  };



  //retrieving all subjects
  Subject.findAllSubjects = (subjectCode, result) => {
    let query = "SELECT subjectCode, subjectName,teacherId FROM subjects";
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
      `UPDATE subjects SET subjectName = ?,teacherId = ? WHERE subjectCode LIKE '%${subjectCode}'`,
      
      [ subject.subjectName, 
        subject.teacherId, 
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