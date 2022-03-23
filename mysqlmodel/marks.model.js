const sql = require("../models/mysqldb")

//constructor 
const Mark = function(mark) {
    this.markId = mark.markId;
    this.marks = mark.marks;
    this.status = mark.status;
    this.termId = mark.termId;
    this.classId = mark.classId;
    this.studentId = mark.studentId;  
    this.subjectCode = mark.subjectCode;
}

//insert a mark into a system
Mark.create = (newMark, result)=> {
    
    sql.query("INSERT INTO student_marks SET ?", newMark, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created mark: ", { markId: res.insertMarkId, ...newMark });
    result(null, { markId: res.insertMarkId, ...newMark });
        
    })
}

//retrieving one mark
Mark.findMarkById = (markId, result) => {
    sql.query(`SELECT * FROM student_marks WHERE markId = ${markId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found mark: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found mark with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all marks
  Mark.findAllMarks = (markId, result) => {
    let query = "SELECT * FROM student_marks";
    if (markId) {
      query += ` WHERE markId LIKE '%${markId}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("marks: ", res);
      result(null, res);
    });
  };

  //update mark by their id
  Mark.updateMarkById = (markId, mark, result) => {
    
    sql.query(
      "UPDATE student_marks SET status = ?, marks = ?, subjectCode= ? WHERE markId = ?",
      
      [ mark.status, 
        mark.marks, 
        mark.subjectCode, 
        markId],

      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found mark with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated mark: ", 
        { markId: markId, ...mark });
        result(null, { markId: markId, ...mark });
      }
    );
  }

  //delete al mark by id
  Mark.deleteMark = (markId, result) => {
    
    sql.query("DELETE FROM student_marks WHERE markId = ?", 
    
    markId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found mark with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted mark with markId: ", markId);
      result(null, res);
    });
  };

module.exports = Mark;