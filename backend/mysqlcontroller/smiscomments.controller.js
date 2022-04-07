const Smiscomments = require("../mysqlmodel/smiscomments.model")

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const smiscomments = new Smiscomments({
        smisCommentsId: req.body.smisCommentsId,
        smisComments: req.body.smisComments,
        
    });

      // Save post in the database
      Smiscomments.create(smiscomments, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the smiscomments."
      });
    else res.send(data);
  });
}

// Retrieve all posts from the database (with condition).
exports.findAllSmisComments =(req, res) => {
  const smisComments = req.query.smisComments;
  Smiscomments.getAllSmiscomments(smisComments, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving SmisComments."
      });
    else res.send(data);
  });
};

//retrieve one SmisComments using their id
exports.findOneSmisComment = (req, res) => {
    Smiscomments.findSmiscommentById(req.params.smisCommentsId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Subject with id ${req.params.smisCommentsId}.`
        });
      } 
      else {
        res.status(500).send({
          message: "Error retrieving Subject with id " + req.params.smisCommentsId
        });
      }
    } else res.send(data);
  });
};


//update a post
exports.updateSmisCommentById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Smiscomments.updateSmisCommentById(
    req.params.smisCommentsId,
    new Smiscomments(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found subject with id ${req.params.smisCommentsId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating subject with id " + req.params.smisCommentsId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteSmisComments = (req, res) => {
    Smiscomments.deleteSmiscomments(req.params.smisCommentsId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found subject with id ${req.params.smisCommentsId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete subject with id " + req.params.smisCommentsId
        });
      }
    } else res.send({ message: `SmisComments was deleted successfully!` });
  });
};

