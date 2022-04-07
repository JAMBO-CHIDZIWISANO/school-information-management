const Smisposts = require("../mysqlmodel/Smisposts.model")

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const smisposts = new Smisposts({
        smisPostsId: req.body.smisPostsId,
        username: req.body.username,
        title: req.body.title,
        smisPosts: req.body.smisPosts,
        
    });

      // Save smisposts in the database
      Smisposts.create(smisposts, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the smiscomments."
      });
    else res.send(data);
  });
}


// Retrieve all posts from the database (with condition).
exports.findAllSmisposts =(req, res) => {
  const smisposts = req.query.smisposts;
  Smisposts.findAllSmisPosts(smisposts, (err, data) => {
    if (err) res.status(500).send({
        message:
        err.message || "Some error occurred while retrieving smiscomments."
      });
    else res.send(data);
  });
};

//retrieve one Subject using their id
exports.findOneSmisPost = (req, res) => {
  Smisposts.findSmisPostById(req.params.smisPostsId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Subject with id ${req.params.smisPostsId}.`
        });
      } 
      else {
        res.status(500).send({
          message: "Error retrieving Subject with id " + req.params.smisPostsId
        });
      }
    } else res.send(data);
  });
};


//update a post
exports.updateSmisPostById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  Smisposts.updateSmisPostById(
    req.params.smisPostsId,
    new Smisposts(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found SmisPosts with id ${req.params.smisPostsId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating SmisPosts with id " + req.params.smisPostsId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteSmisPost = (req, res) => {
  Smisposts.deleteSmisPost(req.params.smisPostsId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found SmisPosts with id ${req.params.smisPostsId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete SmisPosts with id " + req.params.smisPostsId
        });
      }
    } else res.send({ message: `Post was deleted successfully!` });
  });
};

