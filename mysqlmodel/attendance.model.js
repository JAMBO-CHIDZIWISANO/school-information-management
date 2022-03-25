const sql = require("../models/mysqldb")

//constructor 
const Attendance= function(attendance) {
    this.attendenceId = attendance.attendenceId;
    this.attendanceDate = attendance.attendanceDate;
    this.present = attendance.present;
    this.absentReason = attendance.absentReason;
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
        
    console.log("created attendance: ", { attendenceId: res.insertAttendanceId, ...newAttendance });
    result(null, { attendenceId: res.insertAttendenceId, ...newAttendance });
        
    })
}

//retrieving one attendance
Attendance.findAttendanceById = (attendenceId, result) => {
    sql.query(`SELECT students.firstname, students.lastname, student_attendances.present,  student_attendances.absentReason FROM student_attendances join students on  students.studentId=student_attendances.studentId WHERE attendenceId = ${attendenceId}`, (err, res) => {
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

  Attendance.getAllPresent = result => {
    sql.query("SELECT students.firstname, students.surname, student_attendances.attendanceDate, student_attendances.present,  student_attendances.absentReason FROM student_attendances join students on  students.studentId=student_attendances.studentId WHERE present =true", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("present students: ", res);
      result(null, res);
    });
  };
  // retrieving absent names
  Attendance.getAllAbsent = result => {
    sql.query("SELECT students.firstname, students.surname, student_attendances.present,  student_attendances.absentReason FROM student_attendances join students on  students.studentId=student_attendances.studentId WHERE present =false", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Absent students: ", res);
      result(null, res);
    });
  };


  
  //retrieving all attendance
  Attendance.findAllAttendances = (attendenceId, result) => {
    let query = "SELECT students.firstname, students.surname, student_attendances.present,  student_attendances.absentReason FROM student_attendances join students on  students.studentId=student_attendances.studentId";
    if (attendenceId) {
      query += ` WHERE attendenceId LIKE '%${attendenceId}%'`;
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
  Attendance.updateAttendanceById = (attendenceId, attendance, result) => {
    
    sql.query(
      "UPDATE student_attendances SET attendanceDate=?, present = ?, absent = ?, absentReason= ? WHERE attendenceId = ?",
      
      [ attendance.present, 
        attendance.attendanceDate,
        attendance.absent, 
        attendance.absentReason,
        attendenceId],

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
        { attendenceId: attendenceId, ...attendance });
        result(null, { attendenceId: attendenceId, ...attendance });
      }
    );
  }

  //delete al attendance by id
  Attendance.deleteAttendance = (attendenceId, result) => {
    
    sql.query("DELETE FROM student_attendances WHERE attendenceId = ?", 
    
    attendenceId, (err, res) => {
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
      console.log("deleted attendance with attendenceId: ", attendenceId);
      result(null, res);
    });
  };

module.exports = Attendance;