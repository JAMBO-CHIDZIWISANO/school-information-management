const Mark = require("../mysqlmodel/marks.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const mark = new Mark({
      markId: req.body.markId,
      student_score: req.body.student_score,
      total_score: req.body.total_score,
      type: req.body.type,
      termId: req.body.termId,
      studentId: req.body.studentId,
      subjectCode: req.body.subjectCode,
      ayearId: req.body.ayearId,
      });

      // Save Mmark in the database
      Mark.create(mark, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Mark."
      });
    else res.send(data);
  });
}

// Retrieve all Mark from the database (with condition).
exports.findAllMarks =(req, res) => {
  const status = req.query.status;
  Mark.findAllMarks(status, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Marks."
      });
    else res.send(data);
  });
};

// Retrieve all Mark of the all students
exports.findAllStudentsGrades =(req, res) => {
  const status = req.query.status;
  Mark.findAllStudentsGrades(status, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Marks."
      });
    else res.send(data);
  });
};


//retrieve one Mark using their id
exports.findOneMark = (req, res) => {
    Mark.findMarkById(req.params.markId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found mark with id ${req.params.markId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving mark with id " + req.params.markId
        });
      }
    } else res.send(data);
  });
};


//update a mark
exports.updateMarkById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Mark.updateMarkById(
    req.params.markId,
    new Mark(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found mark with id ${req.params.markId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating mark with id " + req.params.markId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteMark = (req, res) => {
    Mark.deleteMark(req.params.markId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found mark with id ${req.params.markId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete mark with id " + req.params.markId
        });
      }
    } else res.send({ message: `mark was deleted successfully!` });
  });
};

// Retrieve all Mark of the all students
exports.findForm1ExamResults =(req, res) => {
  const status = req.query.status;
  Mark.findForm1ExamResults(status, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Marks."
      });
    else res.send(data);
  });
};

// Retrieve all Mark of the all students
exports.findForm2ExamResults =(req, res) => {
  const status = req.query.status;
  Mark.findForm2ExamResults(status, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Marks."
      });
    else res.send(data);
  });
};

// Retrieve all Mark of the all students
exports.findForm3ExamResults =(req, res) => {
  const status = req.query.status;
  Mark.findForm3ExamResults(status, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Marks."
      });
    else res.send(data);
  });
};

// Retrieve all Mark of the all students
exports.findForm4ExamResults =(req, res) => {
  const status = req.query.status;
  Mark.findForm4ExamResults(status, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Marks."
      });
    else res.send(data);
  });
};
