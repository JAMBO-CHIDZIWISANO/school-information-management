const sql = require("../models/mysqldb")

//constructor 
const Teacher = function(teacher) {
    this.teacherId = teacher.teacherId;
    this.firstname = teacher.firstname;
    this.surname = teacher.surname;
    this.gender = teacher.gender;
    this.phoneNo = teacher.phoneNo;
    this.qualification = teacher.qualification;
    this.joinDate = teacher.joinDate;
    this.userId = teacher.userId;
    this.schoolId = teacher.schoolId;

    
}
//insrt a teacherinto a system
Teacher.create = (newTeacher, result)=> {
    
    sql.query("INSERT INTO teachers SET ?", newTeacher, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created teacher: ", { teacherId: res.insertTeacherId, ...newTeacher });
    result(null, { teacherId: res.insertTeacherId, ...newTeacher });
        
    })
}

//retrieving one teacher
Teacher.findTeacherById = (teacherId, result) => {
    sql.query(`SELECT firstname, surname, gender, qualification, joinDate.dataOnly(@dateTimeValue) as join_date FROM teachers WHERE teacherId LIKE '%${teacherId}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found teacher: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found teacher with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all teachers
  Teacher.findAllTeachers = (surname, result) => {
    let query = "SELECT * FROM teachers";
    if (surname) {
      query += ` WHERE lastname LIKE '%${surname}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("teachers: ", res);
      result(null, res);
    });
  };

  //update teacher by their id
  Teacher.updateTeacherById = (teacherId, teacher, result) => {
    
    sql.query(
      `UPDATE teachers SET firstname = ?, surname = ?, gender = ?, qualification = ?, joinDate = ? WHERE teacherId LIKE '%${teacherId}'`,
      
      [ teacher.firstname, 
        teacher.surname, 
        teacher.gender, 
        teacher.phoneNo,
        teacher.qualification, 
        teacher.joinDate, 
        teacherId],

      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found Teacher with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated teacher: ", 
        { teacherId: teacherId, ...teacher });
        result(null, { teacherId: teacherId, ...teacher });
      }
    );
  }

  //delete al teacher by id
  Teacher.deleteTeacher = (teacherId, result) => {
    
    sql.query("DELETE t,u FROM users u join teachers t  on u.username=t.userId  WHERE t.teacherId=  ?", 
    
    teacherId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found teacher with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted teacher with teacher: ", teacherId);
      result(null, res);
    });
  };

  //retrieving one teacher timetable
Teacher.findTeacherTimetable = (teacherId, result) => {
  sql.query(`select s.subjectName as 'subject',c.day, c.lesson_startTime,c.lesson_endTime,r.roomName,l.className  from teachers t join teacher_subjects j on t.teacherId=j.teacherId join subjects s on j.subjectCode=s.subjectCode join classlessons c on c.subjectCode=s.subjectCode join classrooms r on r.roomId=c.roomId join classes l on l.classId=c.classId where t.teacherId='${teacherId}' order by l.classId asc;`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res) {
      console.log("found teacher: ", res);
      result(null, res);
      return;
    }
    // not found teacher with the id
    result({ kind: "not_found" }, null);
  });
};
  
  //retrieving all teachers timetable
  Teacher.findAllTeachersTimetable = (teacherId, result) => {
    let query = "SELECT l.lessonId,t.teacherId, t.surname, l.day, l.lesson_startTime, l.lesson_endTime, r.roomName,s.subjectName,c.className FROM classlessons l JOIN classrooms r ON l.roomId=r.roomId JOIN subjects s ON s.subjectCode=l.subjectCode JOIN teacher_subjects e on e.subjectCode=s.subjectCode join teachers t on t.teacherId=e.teacherId join classes c ON l.classId=c.classId ORDER BY l.classId asc;";
    if (teacherId) {
      query += ` WHERE lastname LIKE '%${teacherId}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("teachers: ", res);
      result(null, res);
    });
  };

  //count all students
Teacher.countAllTeacher = (gender, result) => {
  let query = "Select  sum(CASE when (gender='male') then 1 else 0 end) as male_count, sum(CASE when (gender='female') then 1 else 0 end) as female_count, count(*) as all_teachers from teachers; ";
  if (gender) {
    query += ` WHERE gender LIKE '%${gender}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("teachers: ", res);
    result(null, res);
  });
};

//retrieve all teacher username
Teacher.teachersId = (teacherId, result) => {
  let query = "SELECT teacherId from teachers order by teacherId desc;";
  if (teacherId) {
    query += ` WHERE teacherId LIKE '%${teacherId}%'`;
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

module.exports = Teacher;