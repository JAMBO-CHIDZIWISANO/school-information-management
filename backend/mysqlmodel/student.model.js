const sql = require("../models/mysqldb")

//constructor 
const Student = function(student) {
    this.studentId = student.studentId;
    this.firstname = student.firstname;
    this.surname = student.surname;
    this.DoB = student.DoB;
    this.gender = student.gender;
    this.userId = student.userId;
    this.parentId = student.parentId;
    this.schoolId = student.schoolId;
    this.classId = student.classId;

    
}
//insert a student into a system
Student.create = (newStudent, result)=> {
    
    sql.query("INSERT INTO students SET ?", newStudent, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created student: ", { studentId: res.insertStudentId, ...newStudent });
    result(null, { studentId: res.insertStudentId, ...newStudent });
        
    })
}

//retrieving one student
Student.findStudentById = (studentId, result) => {
    sql.query(`SELECT * FROM students WHERE studentId LIKE '%${studentId}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found student: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found student with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving student details
  Student.findStudentByUsername = (username, result) => {
    sql.query(`SELECT students.firstname, students.surname, users.email, classes.className, schools.schoolName, schools.schoolAdress,schools.schoolLocation,schools.schoolPhoneNo from users inner join students on users.username=students.userId inner join schools on students.schoolId=schools.schoolId join classes on students.classId=classes.classId where users.username LIKE  '%${username}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found student: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found student with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all students
  Student.findAllStudents = (surname, result) => {
    let query = "SELECT * FROM students";
    if (surname) {
      query += ` WHERE lastname LIKE '%${surname}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("students: ", res);
      result(null, res);
    });
  };

  //update student by their id
  Student.updateStudentById = (studentId, student, result) => {
    
    sql.query(
      `UPDATE students SET firstname = ?, DoB = ?, surname = ?, gender = ?, address = ?, classId = ? WHERE studentId LIKE '%${studentId}'`,
      
      [ student.firstname, 
        student.surname, 
        student.gender, 
        student.address,
        student.DoB, 
        student.classId, 
        studentId],

      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found student with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated student: ", 
        { studentId: studentId, ...student });
        result(null, { studentId: studentId, ...student });
      }
    );
  }

  //delete al student by id
  Student.deleteStudent = (studentId, result) => {
    
    sql.query(`DELETE FROM students WHERE studentId LIKE '%${studentId}'`, 
    
    studentId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found student with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted student with studentId: ", studentId);
      result(null, res);
    });
  };

  // retrieving form 4 students
  Student.findForm4Students = (surname, result) => {
    let query = " select users.username, students.firstname, students.surname, users.email from users join  students on users.username=students.userId join classes on students.classId= classes.classId join schools on schools.schoolId=students.schoolId where classes.classId = 4 and schools.schoolId=1;";
    if (surname) {
      query += ` WHERE lastname LIKE '%${surname}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("students: ", res);
      result(null, res);
    });
  };

  // retrieving form 3 students
  Student.findForm3Students = (surname, result) => {
    let query = " select users.username, students.firstname, students.surname, users.email from users join  students on users.username=students.userId join classes on students.classId= classes.classId join schools on schools.schoolId=students.schoolId where classes.classId = 3 and schools.schoolId=1;";
    if (surname) {
      query += ` WHERE lastname LIKE '%${surname}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("students: ", res);
      result(null, res);
    });
  };

  // retrieving form 2 students
  Student.findForm2Students = (surname, result) => {
    let query = " select users.username, students.firstname, students.surname, users.email from users join  students on users.username=students.userId join classes on students.classId= classes.classId join schools on schools.schoolId=students.schoolId where classes.classId = 2 and schools.schoolId=1;";
    if (surname) {
      query += ` WHERE lastname LIKE '%${surname}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("students: ", res);
      result(null, res);
    });
  };

  // retrieving form 1 students
  Student.findForm1Students = (surname, result) => {
    let query = " select users.username, students.firstname, students.surname, users.email from users join  students on users.username=students.userId join classes on students.classId= classes.classId join schools on schools.schoolId=students.schoolId where classes.classId = 1 and schools.schoolId=1;";
    if (surname) {
      query += ` WHERE lastname LIKE '%${surname}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("students: ", res);
      result(null, res);
    });
  };



module.exports = Student;