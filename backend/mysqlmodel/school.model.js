const sql = require("../models/mysqldb.js")
//constructor
const School = function(school){
    this.schoolId = school.schoolId;
    this.schoolName = school.schoolName;
    this.schoolAdress = school.schoolAdress;
    this.schoolPhoneNo = school.schoolPhoneNo;
    this.schoolLocation = school.schoolLocation;
}

//insert school details query
School.create = (newSchool, result)=>{
    sql.query("INSERT INTO schools SET ?", 
    newSchool, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        };

        console.log("create school: ", {
            schoolId: res.insertSchoolId, 
            ...newSchool});
        result(null, { 
            schoolId: res.insertSchoolId, 
            ...newSchool });

    });
}

//update school by their id
School.updateSchoolById = (schoolId, school, result) => {
  
    sql.query(
      `UPDATE schools SET schoolName = ?, schoolAdress = ?, schoolPhoneNo = ?, schoolLocation = ? WHERE schoolId = '${schoolId}'`,
      
      [ school.schoolName,
        school.schoolAdress, 
        school.schoolPhoneNo, 
        school.schoolLocation, 
        schoolId],
  
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
  
          // not found school with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated school: ", 
        { schoolId: schoolId, ...school });
        result(null, { schoolId: schoolId, ...school });
      }
    );
  }

//retrieving single school object
School.findschoolById = (schoolId, result) => {
    sql.query(`SELECT * FROM schools WHERE schoolId LIKE '%${schoolId}%'`, (err, res) => {
      
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res) {
        console.log("found school: ", res);
        result(null, res);
        return;
      }
      // not found schools with the id
      result({ kind: "not_found" }, null);
    });
  };

  // retrieving school
School.findAllSchool = (schoolName, result) => {
  let query = "SELECT * FROM schools";
  if (schoolName) {
    query += ` WHERE schoolName LIKE '%${schoolName}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Schools: ", res);
    result(null, res);
  });
};

  

module.exports = School;