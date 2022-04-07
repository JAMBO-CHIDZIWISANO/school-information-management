const File = require("../mysqlmodel/files.model");

exports.create = (req, res)=>{

    //validate request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        })
    }

    const file = new File({
        
        fileId: req.body.fileId,
        fileName: req.body.fileName,
        // teacherId: req.body.teacherId,
        // parentId: req.body.parentId,
       
      });

      // Save File in the database
      File.create(file, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Comment."
      });
    else res.send(data);
  });
}

// Retrieve all tComments from the databas.
exports.findAllComments =(req, res) => {
  const commentBody = req.query.commentBody;
  Comment.findAllComments(commentBody, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Files."
      });
    else res.send(data);
  });
};

//retrieve one file using their id
exports.findOneFile = (req, res) => {
  File.findFileById(req.params.fileId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found id with id ${req.params.fileId}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving files with id " + req.params.fileId
        });
      }
    } else res.send(data);
  });
};


//update a file
exports.updateFileById = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  console.log(req.body);
  File.updateFileById(
    req.params.FileId,
    new File(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found file with id ${req.params.fileId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating file with id " + req.params.fileId
          });
        }
      } else res.send(data);
    }
  );
};

exports.deleteFile = (req, res) => {
  Comment.deleteFile(req.params.fileId, 
    (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found file with id ${req.params.fileId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete file with id " + req.params.fileId
        });
      }
    } else res.send({ message: `file was deleted successfully!` });
  });
};
