
const sql = require("../models/mysqldb")

const Academic = function(academic){
    this.ayearId = academic.ayearId;
    this.academicyear = academic.academicyear;
}



//inserting a comment into a database
Academic.create = (newAcademic, result)=> {
    
    sql.query("INSERT INTO academicyears SET ?", newAcademic, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created Academic: ", { ayearId: res.insertAyearId, ...newAcademic });
    result(null, { ayearId: res.insertAyearId, ...newAcademic });
        
    })
}

//retrieving all academic
Academic.findAllAcademic = (academicyear, result) => {
  let query = "select ayearId, academicyear from academicyears order by ayearId limit 4 desc;";
  if (academicyear) {
    query += ` WHERE academicyear LIKE '%${academicyear}%'`;
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

  module.exports = Academic;