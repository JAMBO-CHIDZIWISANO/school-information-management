const sql = require("../models/mysqldb")

//constructor 
const Classlessons= function(lesson) {
    this.lessonId = lesson.lessonId;
    this.day = lesson.day;
    this.lesson_startTime = lesson.lesson_startTime;
    this.lesson_endTime = lesson.lesson_endTime;
    this.roomId = lesson.roomId;
    this.subjectCode = lesson.subjectCode;
    
    this.classId = lesson.classId;
    
}

//insert a lessons into a system
Classlessons.create = (newLesson, result)=> {
    
    sql.query("INSERT INTO classlessons SET ?", newLesson, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created lesson: ", { lessonId: res.insertLessonId, ...newLesson });
    result(null, { lessonId: res.insertLessonId, ...newLesson });
        
    })
}

//retrieving one lessons
Classlessons.findLessonById = (lessonId, result) => {
    sql.query(`SELECT * FROM classlessons WHERE lessonId = ${lessonId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found lessons: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found lessons with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all class lessons
  Classlessons.findAllLesson = (subjectCode, result) => {
    let query = "SELECT * FROM classlessons";
    if (subjectCode) {
      query += ` WHERE subjectCode LIKE '%${subjectCode}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("class lessons: ", res);
      result(null, res);
    });
  };

  //update lessons by their id
  Classlessons.updateLessonById = (lessonId, lessons, result) => {
    
    sql.query(
      "UPDATE classLessons SET day=?, lesson_startTime = ?, lesson_endTime = ?subjectCode=?, roomId=?, classId=?  WHERE lessonId = ?",
      
      [ lessons.lesson_startTime,
        lessons.lesson_endTime,
        
        lessons.subjectCode,
        lessons.roomId, 
        lessons.day,
        lessons.classId,
        lessonId],

      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found lessons with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated lessons: ", 
        { lessonId: lessonId, ...lessons });
        result(null, { lessonId: lessonId, ...lessons });
      }
    );
  }

  //delete al lessons by id
  Classlessons.deleteLesson = (lessonId, result) => {
    
    sql.query("DELETE FROM classlessons WHERE lessonId = ?", 
    
    lessonId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found lessons with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted lesson with lessonId: ", lessonId);
      result(null, res);
    });
  };

  //retrieve  all classrooms from database
  Classlessons.findAllRooms = (roomId, result) => {
    let query = "SELECT * FROM classrooms";
    if (roomId) {
      query += ` WHERE roomId = ${roomId}`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("class room: ", res);
      result(null, res);
    });
  };

  //retrieve  all classrooms from database
  Classlessons.findAllLessonTeacher = (techerId, result) => {
    let query = "SELECT teacherId,firstname,surname FROM teachers;";
    if (techerId) {
      query += ` WHERE techerId = ${techerId}`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("classlesson teacher: ", res);
      result(null, res);
    });
  };

module.exports = Classlessons;