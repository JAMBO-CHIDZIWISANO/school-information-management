const Total = require("../mysqlmodel/Total.model")

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const total = new Total({
        totalId: req.body.totalId,
        subjectCode: req.body.subjectCode,
        totalScore: req.body.totalScore,
        
    });

      // Save post in the database
      Total.create(total, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Total."
      });
    else res.send(data);
  });
}


//retrieve one Subject using their id
exports.findOneTotal = (req, res) => {
    Total.findTotalById(req.params.subjectCode, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Total with id ${req.params.subjectCode}.`
        });
      } 
      else {
        res.status(500).send({
          message: "Error retrieving Total with id " + req.params.subjectCode
        });
      }
    } else res.send(data);
  });
};

//update a subject
exports.updateTotalById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Total.updateTotalById(
    req.params.totalId,
    new Total(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found total with id ${req.params.totalId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating total with id " + req.params.totalId
          });
        }
      } else{
         res.send(data)
        };
    }
  );
};


exports.deleteTotal = (req, res) => {
  Total.deleteTotal(req.params.totalId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found total with id ${req.params.totalId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete total with id " + req.params.totalId
        });
      }
    } else res.send({ message: `total was deleted successfully!` });
  });
};
