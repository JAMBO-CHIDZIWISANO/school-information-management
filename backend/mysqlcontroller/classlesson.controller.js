const Classlessons = require("../mysqlmodel/classlessons.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const lesson = new Classlessons({
        lessonId: req.body.lessonId,
        lesson_startTime: req.body.lesson_startTime,
        lesson_endTime : req.body.lesson_endTime,
        day: req.body.day,
        roomId: req.body.roomId,
        subjectCode: req.body.subjectCode,
      
        classId: req.body.classId,

    });

      // Save post in the database
  Classlessons.create(lesson, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the lesson."
      });
    else res.send(data);
  });
}

// Retrieve all lessons from the database (with condition).
exports.findAllLessons =(req, res) => {
  const subjectCode = req.query.subjectCode;
  Classlessons.findAllLesson(subjectCode, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving posts."
      });
    else res.send(data);
  });
};

//retrieve one post using their id
exports.findOneLesson = (req, res) => {
  Classlessons.findLessonById(req.params.lessonId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found lesson with id ${req.params.lessonId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving lesson with id " + req.params.lessonId
        });
      }
    } else res.send(data);
  });
};


//update a post
exports.updateLessonById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Classlessons.updateLessonById(
    req.params.lessonId,
    new Post(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found lesson with id ${req.params.lessonId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating lesson with id " + req.params.lessonId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteLesson = (req, res) => {
  Classlessons.deleteLesson(req.params.lessonId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found lesson with id ${req.params.lessonId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete lesson with id " + req.params.lessonId
        });
      }
    } else res.send({ message: `lesson was deleted successfully!` });
  });
};


// Retrieve all rooms from the database (with condition).
exports.findAllRooms =(req, res) => {
  const roomId = req.query.roomId;
  Classlessons.findAllRooms(roomId, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving rooms."
      });
    else res.send(data);
  });
};

// Retrieve all rooms from the database (with condition).
exports.findAllLessonTeacher =(req, res) => {
  const teacherId = req.query.teacherId;
  Classlessons.findAllLessonTeacher(teacherId, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving rooms."
      });
    else res.send(data);
  });
};