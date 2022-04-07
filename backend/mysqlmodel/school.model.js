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

//retrieve one school by id
School.findSchoolById = (schoolId, result) => {
    sql.query(`SELECT * FROM students WHERE studentId LIKE '%${schoolId}%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found school: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found school with the id
      result({ kind: "not_found" }, null);
    });
  };

module.exports = School;