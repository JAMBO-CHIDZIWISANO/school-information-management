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
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        gender: req.body.gender,
        qualification: req.body.qualification,
        joinDate: req.body.joinDate
      });

      // Save Tutorial in the database
  Teacher.create(teacher, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Teacher."
      });
    else res.send(data);
  });
}