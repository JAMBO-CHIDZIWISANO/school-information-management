const sql = require("../models/mysqldb")

//constructor 
const Smiscomments = function(smiscomments) {
    this.smisCommentsId = smiscomments.smisCommentsId;
    this.smisComments = smiscomments.smisComments;
    this.smisPostsId = smiscomments.smisPostsId;
    this.username = smiscomments.username;
}
//insert a smisComment into the database system
Smiscomments.create = (newSmiscomments, result)=> {
    
    sql.query("INSERT INTO smiscomments SET ?", newSmiscomments, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created smiscomments: ", { smisCommentsId: res.insertSmisCommentsId, ...newSmiscomments });
    result(null, { smisCommentsId: res.insertSmisCommentsId, ...newSmiscomments });
        
    })
}

//retrieving one smisComments
Smiscomments.findSmiscommentById = (smisPostsId, result) => {
    sql.query(`select smiscomments.smisComments, smiscomments.username from smiscomments join smisposts on smiscomments.smisPostsId = smisposts.smisPostsId where smiscomments.smisPostsId = ${smisPostsId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res) {
        console.log("found smiscomments: ", res);
        result(null, res);
        return;
      }
      // not found smisComments with the id
      result({ kind: "not_found" }, null);
    });
  };

//retrieving all smisComments
Smiscomments.getAllSmiscomments = (smisCommentsId, result) => {
  let query = "SELECT * FROM smiscomments";
  if (smisCommentsId) {
    query += ` WHERE smisCommentsId = ${smisCommentsId}`;
    
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("smisComments: ", res);
    result(null, res);
  });
};

//update subject by their id
Smiscomments.updateSmiscommentById = (smisCommentsId, smiscomments, result) => {
  
  sql.query(
    `UPDATE smiscomments SET smiscomments = ? WHERE smisCommentsId = ${smisCommentsId}`,
    
    [ smiscomments.smisComments,  
      smisCommentsId],

    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {

        // not found smisComments with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated smiscomments: ", 
      { smisCommentsId: smisCommentsId, ...smiscomments });
      result(null, { smisCommentsId: smisCommentsId, ...smiscomments });
    }
  );
}

//delete all smisComments by code
Smiscomments.deleteSmiscomments = (smisCommentsId, result) => {
  
  sql.query(`DELETE FROM smiscomments WHERE smisCommentsId = ${smisCommentsId}`, smisCommentsId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found smisComments with the code
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted smisComments with smisCommentsId: ", smisCommentsId);
    result(null, res);
  });
};

module.exports = Smiscomments;