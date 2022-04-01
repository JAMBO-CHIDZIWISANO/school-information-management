const sql = require("../models/mysqldb")

//constructor 
const Mark = function(mark) {
    this.markId = mark.markId;
    this.marks = mark.marks;
    this.type = mark.type;
    this.termId = mark.termId;
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

  //retrieve marks of all students at school and all subjects 
  Mark.findAllStudentsGrades = (markId, result) => {
    let query = "select students.firstname, students.surname, students.classId, student_marks.subjectCode, student_marks.marks,student_marks.type, case when student_marks.marks>=80 then 'A=distinction' when student_marks.marks>=70 then 'B=very good' when student_marks.marks>=60 then 'C=good' when student_marks.marks>=50 then 'D=average' else 'F=fail' end as 'mark'from student_marks join students on students.studentId=student_marks.studentId group by subjectCode,firstname,surname order by classId;";
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
      "UPDATE student_marks SET type = ?, marks = ?, subjectCode= ? WHERE markId = ?",
      
      [ mark.type, 
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

  //results for form 1 students
  Mark.findForm1ExamResults = (markId, result) => {
    let query = "select students.firstname, students.surname, students.classId, student_marks.subjectCode, student_marks.marks,student_marks.type, case when student_marks.marks>=80 then 'A=distinction' when student_marks.marks>=70 then 'B=very good' when student_marks.marks>=60 then 'C=good' when student_marks.marks>=50 then 'D=average' else 'F=fail' end as 'mark'from classes join students on students.classId=classes.classId join student_marks on students.studentId=student_marks.studentId where classes.classId=1 group by subjectCode,firstname,surname order by classId;";
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

  Mark.findForm1ExamResults = (markId, result) => {
    let query = "select students.firstname, students.surname, students.classId, student_marks.subjectCode, student_marks.marks,student_marks.type, case when student_marks.marks>=80 then 'A=distinction' when student_marks.marks>=70 then 'B=very good' when student_marks.marks>=60 then 'C=good' when student_marks.marks>=50 then 'D=average' else 'F=fail' end as 'mark'from classes join students on students.classId=classes.classId join student_marks on students.studentId=student_marks.studentId where classes.classId=1 group by subjectCode,firstname,surname order by classId;";
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


  Mark.findForm4ExamResults = (markId, result) => {
    let query = "select students.firstname, students.surname, students.classId, student_marks.subjectCode, student_marks.marks,student_marks.type, case when student_marks.marks>=80 then 'A=distinction' when student_marks.marks>=70 then 'B=very good' when student_marks.marks>=60 then 'C=good' when student_marks.marks>=50 then 'D=average' else 'F=fail' end as 'mark'from classes join students on students.classId=classes.classId join student_marks on students.studentId=student_marks.studentId where classes.classId=4 group by subjectCode,firstname,surname order by classId;";
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


  Mark.findForm3ExamResults = (markId, result) => {
    let query = "select students.firstname, students.surname, students.classId, student_marks.subjectCode, student_marks.marks,student_marks.type, case when student_marks.marks>=80 then 'A=distinction' when student_marks.marks>=70 then 'B=very good' when student_marks.marks>=60 then 'C=good' when student_marks.marks>=50 then 'D=average' else 'F=fail' end as 'mark'from classes join students on students.classId=classes.classId join student_marks on students.studentId=student_marks.studentId where classes.classId=3 group by subjectCode,firstname,surname order by classId;";
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

  //form 2 results
  Mark.findForm2ExamResults = (markId, result) => {
    let query = "select students.firstname, students.surname, students.classId, student_marks.subjectCode, student_marks.marks,student_marks.type, case when student_marks.marks>=80 then 'A=distinction' when student_marks.marks>=70 then 'B=very good' when student_marks.marks>=60 then 'C=good' when student_marks.marks>=50 then 'D=average' else 'F=fail' end as 'mark'from classes join students on students.classId=classes.classId join student_marks on students.studentId=student_marks.studentId where classes.classId=2 group by subjectCode,firstname,surname order by classId;";
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


module.exports = Mark;