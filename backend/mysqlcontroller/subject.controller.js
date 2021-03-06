const Subject = require("../mysqlmodel/subjects.model")

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const subject = new Subject({
        subjectCode: req.body.subjectCode,
        subjectName: req.body.subjectName,
        teacherId: req.body.teacherId,
        
    });

      // Save post in the database
      Subject.create(subject, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the subject."
      });
    else res.send(data);
  });
}

// Retrieve all posts from the database (with condition).
exports.findAllSubjects =(req, res) => {
  const subjectName = req.query.subjectName;
  Subject.findAllSubjects(subjectName, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving posts."
      });
    else res.send(data);
  });
};

//retrieve one Subject using their id
exports.findOneSubject = (req, res) => {
    Subject.findSubjectById(req.params.subjectCode, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Subject with id ${req.params.subjectCode}.`
        });
      } 
      else {
        res.status(500).send({
          message: "Error retrieving Subject with id " + req.params.subjectCode
        });
      }
    } else res.send(data);
  });
};

//retrieve one total using their id
exports.findOneTotal = (req, res) => {
  Subject.findTotalById(req.params.subjectCode, (err, data) => {
  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found total with id ${req.params.subjectCode}.`
      });
    } 
    else {
      res.status(500).send({
        message: "Error retrieving total with id " + req.params.subjectCode
      });
    }
  } else res.send(data);
});
};

//retrieve students by SubjectCode 
exports.findStudentsBySubjectCode = (req, res) => {
  Subject.findStudentsIdBySubjectCode(req.params.subjectCode, (err, data) => {
  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found Subject with id ${req.params.subjectCode}.`
      });
    } 
    else {
      res.status(500).send({
        message: "Error retrieving Subject with id " + req.params.subjectCode
      });
    }
  } else res.send(data);
});
};

//retrieve all students who take this subject by SubjectCode 
exports.findStudentsWhoTakeSubject = (req, res) => {
  Subject.findStudentsWhoTakeSubject(req.params.subjectCode, (err, data) => {
  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found Subject with id ${req.params.subjectCode}.`
      });
    } 
    else {
      res.status(500).send({
        message: "Error retrieving Subject with id " + req.params.subjectCode
      });
    }
  } else res.send(data);
});
};

//retrieve students grades by SubjectCode 
exports.findStudentsGradesBySubjectCode = (req, res) => {
  Subject.findStudentsGradesBySubjectCode(req.params.subjectCode, (err, data) => {
  if (err) {
    if (err.kind === "not_found") {
      res.status(404).send({
        message: `Not found Subject with id ${req.params.subjectCode}.`
      });
    } 
    else {
      res.status(500).send({
        message: "Error retrieving Subject with id " + req.params.subjectCode
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
  Subject.updateSubjectById(
    req.params.subjectCode,
    new Subject(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found subject with id ${req.params.subjectCode}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating subject with id " + req.params.subjectCode
          });
        }
      } else{
         res.send(data)
        };
    }
  );
};

exports.deleteSubject = (req, res) => {
  Subject.deleteSubject(req.params.subjectCode, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found subject with id ${req.params.subjectCode}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete subject with id " + req.params.subjectCode
        });
      }
    } else res.send({ message: `Post was deleted successfully!` });
  });
};

// count all possubject from the database (with condition).
exports.countAllSubjects =(req, res) => {
  const subjectCode = req.query.subjectCode;
  Subject.countAllSubjects(subjectCode, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving posts."
      });
    else res.send(data);
  });
};