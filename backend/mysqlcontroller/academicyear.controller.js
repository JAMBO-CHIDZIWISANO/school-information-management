const Academic = require("../mysqlmodel/academicyr.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const academics = new Academic({
        ayearId: req.body.ayearId,
        academicyear: req.body.academicyear,
        
    });

      // Save post in the database
      Academic.create(academics, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the academics."
      });
    else res.send(data);
  });
}

exports.findAllAcademic=(req, res) => {
    const className = req.query.className;
    Academic.findAllAcademic(className, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving classes."
        });
      else res.send(data);
    });
  };