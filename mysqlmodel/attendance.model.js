const sql = require("../models/mysqldb")

//constructor 
const Attendance= function(attendance) {
    this.attendanceId = attendance.attendanceId;
    this.absentDate = attendance.absentDate;
    this.absentReason = attendance.absentReason;
    this.presentDate = attendance.presentDate;
    this.studentId= attendance.studentId;
    this.classId = attendance.classId;
    this.termId = attendance.termId;

    
}
//insrt a attendance into a system
Attendance.create = (newAttendance, result)=> {
    
    sql.query("INSERT INTO student_attendances SET ?", newAttendance, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created attendance: ", { attendanceId: res.insertAttendanceId, ...newAttendance });
    result(null, { attendanceId: res.insertAttendanceId, ...newAttendance });
        
    })
}

//retrieving one attendance
Attendance.findAttendanceById = (attendanceId, result) => {
    sql.query(`SELECT presentDate, absentDate, absentReason FROM student_attendances WHERE attendanceId = ${attendanceId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found attendance: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found attendance with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all attendance
  Attendance.findAllAttendances = (attendanceId, result) => {
    let query = "SELECT presentDate, absentDate, absentReason FROM student_attendances";
    if (attendanceId) {
      query += ` WHERE attendanceId LIKE '%${attendanceId}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("attendances: ", res);
      result(null, res);
    });
  };

  //update attendance by their id
  Attendance.updateAttendanceById = (attendanceId, attendance, result) => {
    
    sql.query(
      "UPDATE student_attendances SET presentDate = ?, absentDate = ? absentReason= ? WHERE attendanceId = ?",
      
      [ attendance.presentDate, 
        attendance.absentDate, 
        attendance.absentReason,
        attendanceId],

      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found attendance with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated attendance: ", 
        { attendanceId: attendanceId, ...attendance });
        result(null, { attendanceId: attendanceId, ...attendance });
      }
    );
  }

  //delete al attendance by id
  Attendance.deleteAttendance = (attendanceId, result) => {
    
    sql.query("DELETE FROM student_attendances WHERE attendanceId = ?", 
    
    attendanceId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found attendance with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted attendance with attendanceId: ", attendanceId);
      result(null, res);
    });
  };

module.exports = Attendance;