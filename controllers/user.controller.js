

//can be accessed by user and none users
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };

  //all user can access
  exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
  };

  //admin board
  exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
  };

  //teachers board
  exports.teacherBoard = (req, res) => {
    res.status(200).send("teacher Content.");
  };