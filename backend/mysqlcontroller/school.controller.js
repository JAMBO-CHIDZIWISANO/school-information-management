const School = require("../mysqlmodel/school.model");

exports.create = (req, res)=>{
    //validate request
    if (!req.body){
        res.status(400).send({
            message: "content cannot be empty"
        });
    }

    const school = new School({
        schoolId: req.body.schoolId,
        schoolName: req.body.schoolName,
        schoolAdress: req.body.schoolAdress,
        schoolPhoneNo: req.body.schoolPhoneNo,
        schoolLocation: req.body.schoolLocation
    });

    //handle error/send data
    School.create(school, (err, data)=>{
        if(err){
            res.status(500).send({
                message: err.message || "some error occured"
            })
        }
        else res.send(data);
    });
}

//update a school
exports.updateSchoolById = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    School.updateSchoolById(
      req.params.schoolId,
      new School(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found parent with id ${req.params.schoolId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating parent with id " + req.params.schoolId
            });
          }
        } else {
          res.send(data)
        };
      }
    );
  };
  
  // Retrieve all school data from the database (with condition).
exports.findAllSchool =(req, res) => {
  const schoolName = req.query.schoolName;
  School.findAllSchool(schoolName, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving school."
      });
    else res.send(data);
  });
};


//retrieve one school using their id
exports.findOneSchool = (req, res) => {
    School.findschoolById(req.params.schoolId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found school with id ${req.params.schoolId}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving school with id " + req.params.schoolId
          });
        }
      } else res.send(data);
    });
  };