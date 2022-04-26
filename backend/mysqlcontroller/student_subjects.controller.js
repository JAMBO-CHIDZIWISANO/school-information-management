const StudentSubject = require("../mysqlmodel/student_subjects..model")

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const ssubject = new StudentSubject({
        studentId: req.body.studentId,
        subjectCode: req.body.subjectCode,
    });

      // Save data in the database
      StudentSubject.create(ssubject, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the subject and studentid."
      });
    else res.send(data);
  });
}

// Retrieve all data from the database (with condition).
exports.findAllSSubjects =(req, res) => {
  const studentId = req.query.studentId;
  StudentSubject.findAllSSubjects(studentId, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving data."
      });
    else res.send(data);
  });
};

//retrieve one Subject using their id
exports.findOneSSubject = (req, res) => {
    StudentSubject.findSSubjectById(req.params.studentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Subject with id ${req.params.studentId}.`
        });
      } 
      else {
        res.status(500).send({
          message: "Error retrieving Subject with student id " + req.params.studentId
        });
      }
    } else res.send(data);
  });
};


//update a subject
exports.updateSubjectById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  StudentSubject.updateSSubjectById(
    req.params.studentId,
    new StudentSubject(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found subject with id ${req.params.studentId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating subject with id " + req.params.studentId
          });
        }
      } else{
         res.send(data)
        };
    }
  );
};

exports.deleteSSubject = (req, res) => {
  StudentSubject.deleteSSubject(req.params.studentId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found subject with id ${req.params.studentId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete subject with id " + req.params.studentId
        });
      }
    } else res.send({ message: `Post was deleted successfully!` });
  });
};

