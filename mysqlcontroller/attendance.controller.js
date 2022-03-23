const Attendance = require("../mysqlmodel/attendance.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const attendance = new Attendance({
      attendenceId: req.body.attendenceId,
        absentDate: req.body.absentDate,
        absentReason: req.body.absentReason,
        presentDate: req.body.presentDate,
        studentId: req.body.studentId,
        classId: req.body.classId,
        termId: req.body.termId,
    });

      // Save Attendance in the database
      Attendance.create(attendance, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Attendance."
      });
    else res.send(data);
  });
}

// Retrieve all Attendance from the database (with condition).
exports.findAllAttendances =(req, res) => {
  const attendenceId = req.query.attendenceId;
  Attendance.findAllAttendances(attendenceId, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving attendance."
      });
    else res.send(data);
  });
};

//retrieve one Attendance using their id
exports.findOneAttendance = (req, res) => {
    Attendance.findAttendanceById(req.params.attendenceId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found attendance with id ${req.params.attendenceId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving attendance with id " + req.params.attendenceId
        });
      }
    } else res.send(data);
  });
};


//update a Attendance
exports.updateAttendanceById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Attendance.updateAttendanceById(
    req.params.attendenceId,
    new Attendance(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Attendance with id ${req.params.attendenceId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Attendance with id " + req.params.attendenceId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteAttendance = (req, res) => {
    Attendance.deleteAttendance(req.params.attendenceId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Attendance with id ${req.params.attendenceId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Attendance with id " + req.params.attendenceId
        });
      }
    } else res.send({ message: `Attendance was deleted successfully!` });
  });
};
