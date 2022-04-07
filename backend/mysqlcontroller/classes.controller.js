const Classes = require("../mysqlmodel/classes.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const classes = new Classes({
        classId: req.body.classId,
        className: req.body.className,
        
    });

      // Save post in the database
      Classes.create(classes, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the classes."
      });
    else res.send(data);
  });
}

exports.findAllClasses=(req, res) => {
    const className = req.query.className;
    Classes.findAllClasses(className, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving classes."
        });
      else res.send(data);
    });
  };