const TeacherSubject = require("../mysqlmodel/teacher_subject.model")

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const tsubject = new TeacherSubject({
        teacherId: req.body.teacherId,
        subjectCode: req.body.subjectCode,
    });

      // Save data in the database
      TeacherSubject.create(tsubject, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the subject and teacherId."
      });
    else res.send(data);
  });
}

// Retrieve all data from the database (with condition).
exports.findAllTSubjects =(req, res) => {
  const teacherId = req.query.teacherId;
  TeacherSubject.findAllTSubjects(teacherId, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving data."
      });
    else res.send(data);
  });
};

//retrieve one Subject using their id
exports.findOneTSubject = (req, res) => {
    TeacherSubject.findTSubjectById(req.params.teacherId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Subject with id ${req.params.teacherId}.`
        });
      } 
      else {
        res.status(500).send({
          message: "Error retrieving Subject with student id " + req.params.teacherId
        });
      }
    } else res.send(data);
  });
};


//update a subject
exports.updateTSubjectById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  TeacherSubject.updateTSubjectById(
    req.params.teacherId,
    new TeacherSubject(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found subject with id ${req.params.teacherId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating subject with id " + req.params.teacherId
          });
        }
      } else{
         res.send(data)
        };
    }
  );
};

exports.deleteTSubject = (req, res) => {
  TeacherSubject.deleteTSubject(req.params.teacherId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found subject with id ${req.params.teacherId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete subject with id " + req.params.teacherId
        });
      }
    } else res.send({ message: `subject was deleted successfully!` });
  });
};

