const sql = require("../models/mysqldb")

//constructor 
const Total = function(total) {
    this.totalId = total.totalId;
    this.totalScore = total.totalScore;
    this.subjectCode = total.subjectCode;
}

//insert a subject into a system
Total.create = (newTotal, result)=> {
    
    sql.query("INSERT INTO totals SET ?", newTotal, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created total: ", { totalId: res.insertTotal, ...newTotal });
    result(null, { totalId: res.insertTotal, ...newTotal });
        
    })
}

//retrieving one total
Total.findTotalById = (subjectCode, result) => {
    sql.query(`SELECT t.totalScore from totals t join subjects s on t.subjectCode=s.subjectCode where s.subjectCode = '${subjectCode}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res) {
        console.log("Found score: ", res);
        result(null, res);
        return;
      }
      // not found total with the id
      result({ kind: "not_found" }, null);
    });
  };

    //update subject by their id
    Total.updateTotalById = (totalId, total, result) => {
    
      sql.query(
        `UPDATE totals SET totalScore = ? WHERE totalId LIKE '%${totalId}'`,
        
        [ total.totalScore,
          totalId],
  
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
          if (res.affectedRows == 0) {
  
            // not found total with the id
            result({ kind: "not_found" }, null);
            return;
          }
          console.log("updated total: ", 
          { totalId: totalId, ...total });
          result(null, { totalId: totalId, ...total });
        }
      );
    }

    //delete al total by code
Total.deleteTotal = (totalId, result) => {
    
  sql.query("DELETE FROM totals WHERE totalId = ?", 
  
  totalId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found total with the code
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted total with totalId: ", totalId);
    result(null, res);
  });
};
  

module.exports = Total;