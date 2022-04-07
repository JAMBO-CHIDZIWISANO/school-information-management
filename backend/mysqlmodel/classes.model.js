
const sql = require("../models/mysqldb")

const Classes = function(classes){
    this.classId = classes.classId;
    this.className = classes.className;
}

//retrieving all classes
Classes.findAllClasses = (className, result) => {
  let query = "select classId, className from classes order by classId limit 4;";
  if (className) {
    query += ` WHERE className LIKE '%${className}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("class: ", res);
    result(null, res);
  });
};

  module.exports = Classes;