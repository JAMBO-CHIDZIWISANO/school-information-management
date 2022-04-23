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
      `UPDATE students SET firstname = ?,surname = ?, gender = ?,DoB = ?,  classId = ?,parentId=? WHERE studentId = '${studentId}'`,
      
      [ student.firstname, 
        student.surname, 
        student.gender, 
        student.DoB, 
        student.classId, 
        student.parentId,
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
      query += ` WHERE surname LIKE '%${surname}%'`;
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

  //count all students depending on the class and gender
  Student.findNumberOfMaleAndFemaleStudents = (gender, result) => {
    let query = "Select SUM(CASE WHEN (classId=1) THEN 1 ELSE 0 END) AS form1, SUM(CASE WHEN (classId=2) THEN 1 ELSE 0 END) AS form2, SUM(CASE WHEN (classId=3) THEN 1 ELSE 0 END) AS form3, SUM(CASE WHEN (classId=4) THEN 1 ELSE 0 END) AS form4, sum(CASE WHEN (gender = 'male' && classId=1) THEN 1 ELSE 0 END) as Male_count1, sum(CASE WHEN (gender='female' && classId=1) then 1 else 0 end) as female_count1, sum(CASE when (gender='male' && classId=2) then 1 else 0 end) as male_count2, sum(CASE when (gender='female' && classId=2) then 1 else 0 end) as female_count2, sum(CASE when (gender='male' && classId=3) then 1 else 0 end) as male_count3, sum(CASE when (gender='female' && classId=3) then 1 else 0 end) as female_count3, sum(CASE when (gender='male' && classId=4) then 1 else 0 end) as male_count4, sum(CASE when (gender='female' && classId=4) then 1 else 0 end) as male_count4, count(*) as all_students from students;";
    if (gender) {
      query += ` WHERE gender LIKE '%${gender}%'`;
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

//count all students
Student.countAllStudents = (gender, result) => {
  let query = "Select  sum(CASE when (gender='male') then 1 else 0 end) as male_count, sum(CASE when (gender='female') then 1 else 0 end) as female_count, count(*) as all_students from students;";
  if (gender) {
    query += ` WHERE gender LIKE '%${gender}%'`;
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
  //retrieve a student examination results
Student.studentExamResults = (studentId, result) => {
  sql.query(`select u.subjectName, m.student_score, m.total_score, round((m.student_score/m.total_score)*100,2) as grade,CASE WHEN (round((m.student_score/m.total_score)*100,2))>=80 THEN 'A=distinction' WHEN (round((m.student_score/m.total_score)*100,2))>=70 THEN 'B=very good' WHEN (round((m.student_score/m.total_score)*100,2))>=60 THEN 'C=good' WHEN (round((m.student_score/m.total_score)*100,2))>=50 THEN 'D=average' ELSE 'F=fail' END AS remarks from students s inner join classes c on s.classId=c.classId join student_marks m on m.studentId = s.studentId join subjects u on m.subjectCode=u.subjectCode join terms t on m.termId=t.termId where s.studentId like '%${studentId}%' group by u.subjectCode; `, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res) {
      console.log("found student: ", res);
      result(null, res);
      return;
    }
    // not found student with the id
    result({ kind: "not_found" }, null);
  });
};

  //retrieve a student person info
  Student.studentPersonalInfo = (studentId, result) => {
    sql.query(`select s.studentId,s.firstname,s.surname,c.className,t.termName, sum(round((m.student_score/m.total_score)*100,2)) as marks from student_marks m join students s on m.studentId=s.studentId join classes c on s.classId=c.classId join terms t on t.termId=m.termId where m.type like '%End-Of_Term%' and m.studentId like '${studentId}'  group by studentId order by marks desc;`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res) {
        console.log("found student: ", res);
        result(null, res);
        return;
      }
      // not found student with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieve a time table depending on the class of a student
  Student.studentTimetable = (studentId, result) => {
    sql.query(`  SELECT l.day, l.lesson_startTime, l.lesson_endTime, r.roomName,s.subjectName from classlessons l join classrooms r on l.roomId=r.roomId join subjects s on s.subjectCode=l.subjectCode join classes c on l.classId=c.classId join students t on t.classId=c.classId where t.studentId like '${studentId}';`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res) {
        console.log("found time table: ", res);
        result(null, res);
        return;
      }
      // not found student with the id
      result({ kind: "not_found" }, null);
    });
  };
  


module.exports = Student;