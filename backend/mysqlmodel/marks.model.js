const sql = require("../models/mysqldb")

//constructor 
const Mark = function(mark) {
    this.markId = mark.markId;
    this.student_score = mark.student_score;
    this.termId = mark.termId;
    this.type = mark.type;
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
    let query = "SELECT students.firstname, students.surname, classes.className, subjects.subjectName, student_marks.student_score, totals.totalScore, student_marks.type, round((student_marks.student_score/totals.totalScore)*100,2) AS percent, CASE WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=80 THEN 'A=distinction' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=70 THEN 'B=very good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=60 THEN 'C=good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=50 THEN 'D=average' ELSE 'F=fail' END AS Grade FROM students INNER JOIN student_marks  ON students.studentId=student_marks.studentId INNER JOIN subjects ON student_marks.subjectCode=subjects.subjectCode JOIN totals on totals.subjectCode=subjects.subjectCode JOIN classes ON students.classId=classes.classId GROUP BY student_marks.termId ORDER BY className;";
    
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
      "UPDATE student_marks SET studentId=?, student_score = ?, termId = ?, type=? WHERE markId = ?",
      
      [  
        mark.studentId,
        mark.student_score,
        mark.termId,
        mark.type,
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
    let query = "select students.firstname, students.surname, subjects.subjectName, student_marks.student_score, totals.totalScore, student_marks.type, round((student_marks.student_score/totals.totalScore)*100,2) AS percent, CASE WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=80 THEN 'A=distinction' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=70 THEN 'B=very good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=60 THEN 'C=good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=50 THEN 'D=average' ELSE 'F=fail' END AS Grade FROM students INNER JOIN student_marks ON students.studentId=student_marks.studentId INNER JOIN subjects ON student_marks.subjectCode=subjects.subjectCode JOIN totals on totals.subjectCode=subjects.subjectCode JOIN classes ON students.classId=classes.classId WHERE classes.classId=1 GROUP BY subjects.subjectName ORDER BY students.userId;";
    
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
    let query = " select students.firstname, students.surname, subjects.subjectName, student_marks.student_score, totals.totalScore, student_marks.type, round((student_marks.student_score/totals.totalScore)*100,2) AS percent, CASE WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=80 THEN 'A=distinction' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=70 THEN 'B=very good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=60 THEN 'C=good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=50 THEN 'D=average' ELSE 'F=fail' END AS Grade FROM students INNER JOIN student_marks ON students.studentId=student_marks.studentId INNER JOIN subjects ON student_marks.subjectCode=subjects.subjectCode JOIN totals ON totals.subjectCode=subjects.subjectCode JOIN classes ON students.classId=classes.classId WHERE classes.classId=4 GROUP BY subjects.subjectName ORDER BY students.userId;";
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
    let query = " select students.firstname, students.surname, subjects.subjectName, student_marks.student_score, totals.totalScore, student_marks.type, round((student_marks.student_score/totals.totalScore)*100,2) AS percent, CASE WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=80 THEN 'A=distinction' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=70 THEN 'B=very good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=60 THEN 'C=good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=50 THEN 'D=average' ELSE 'F=fail' END AS Grade FROM students INNER JOIN student_marks ON students.studentId=student_marks.studentId INNER JOIN subjects ON student_marks.subjectCode=subjects.subjectCode JOIN totals on totals.subjectCode=subjects.subjectCode JOIN classes ON students.classId=classes.classId WHERE classes.classId=3 GROUP BY subjects.subjectName ORDER BY students.userId;";
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
    let query = " select students.firstname, students.surname, subjects.subjectName, student_marks.student_score, totals.totalScore, student_marks.type, round((student_marks.student_score/totals.totalScore)*100,2) AS percent, CASE WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=80 THEN 'A=distinction' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=70 THEN 'B=very good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=60 THEN 'C=good' WHEN (round((student_marks.student_score/totals.totalScore)*100,2))>=50 THEN 'D=average' ELSE 'F=fail' END AS Grade FROM students INNER JOIN student_marks ON students.studentId=student_marks.studentId INNER JOIN subjects ON student_marks.subjectCode=subjects.subjectCode JOIN totals on subjects.subjectCode=totals.subjectCode JOIN classes ON students.classId=classes.classId WHERE classes.classId=2 GROUP BY subjects.subjectName ORDER BY students.userId;";
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