const Teacher = require("../mysqlmodel/teacher.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const teacher = new Teacher({
        teacherId: req.body.teacherId,
        firstname: req.body.firstname,
        surname: req.body.surname,
        phoneNo: req.body.phoneNo,
        gender: req.body.gender,
        qualification: req.body.qualification,
        joinDate: req.body.joinDate,
        userId: req.body.userId,
        schoolId: req.body.schoolId
      });

      // Save teacher in the database
  Teacher.create(teacher, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Teacher."
      });
    else res.send(data);
  });
}

// Retrieve all teachers from the database (with condition).
exports.findAllTeachers =(req, res) => {
  const surname = req.query.surname;
  Teacher.findAllTeachers(surname, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    else res.send(data);
  });
};

//retrieve one teacher using their id
exports.findOneTeacher = (req, res) => {
  Teacher.findTeacherById(req.params.teacherId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found teacher with id ${req.params.teacherId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving teacher with id " + req.params.teacherId
        });
      }
    } else res.send(data);
  });
};


//update a teacher
exports.updateTeacherById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Teacher.updateTeacherById(
    req.params.teacherId,
    new Teacher(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found teacher with id ${req.params.teacherId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating teacher with id " + req.params.teacherId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteTeacher = (req, res) => {
  Teacher.deleteTeacher(req.params.teacherId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found teacher with id ${req.params.teacherId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete teacher with id " + req.params.teacherId
        });
      }
    } else res.send({ message: `Teacher was deleted successfully!` });
  });
};

//retrieve one teacher timetable
exports.findTeacherTimetable = (req, res) => {
  Teacher.findTeacherTimetable(req.params.teacherId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found teacher with id ${req.params.teacherId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving teacher with id " + req.params.teacherId
        });
      }
    } else res.send(data);
  });
};

//retrieve one teacher's subjects
exports.findTeacherSubjects = (req, res) => {
  Teacher.findTeacherSubjects(req.params.teacherId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found teacher with id ${req.params.teacherId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving teacher with id " + req.params.teacherId
        });
      }
    } else res.send(data);
  });
};

// Retrieve all teachers from the database (with condition).
exports.findAllTeachersTimetable =(req, res) => {
  const teacherId = req.query.teacherId;
  Teacher.findAllTeachersTimetable(teacherId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    else res.send(data);
  });
};

//count of male and female and all teachers at school
exports.countAllTeachers=(req, res) => {
  const gender = req.query.gender;
  Teacher.countAllTeacher(gender, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teachers."
      });
    else res.send(data);
  });
};

//retrieve student Id
exports.teachersId=(req, res) => {
  const teacherId = req.query.teacherId;
  Teacher.teachersId(teacherId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving teacher."
      });
    else res.send(data);
  });
};