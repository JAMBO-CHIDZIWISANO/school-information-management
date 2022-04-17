const sql = require("../models/mysqldb")

//smisPosts constructor 
const Smisposts = function(smisposts) {
    this.smisPostsId = smisposts.smisPostsId;
    this.title = smisposts.title;
    this.smisPosts = smisposts.smisPosts;
    this.username = smisposts.username;
  
}

//inserting a comment into a database
Smisposts.create = (newSmisPosts, result)=> {
    
    sql.query("INSERT INTO smisposts SET ?", newSmisPosts, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created smisPosts: ", { smisPostsId: res.insertSmisPostsId, ...newSmisPosts });
    result(null, { SmisPostsId: res.insertSmisPostsId, ...newSmisPosts });
        
    })
}

//retrieving one comment
Smisposts.findSmisPostById = (smisPostsId, result) => {
    sql.query(`SELECT * FROM smisposts WHERE smisPostsId = ${smisPostsId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found smisPosts: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found comment with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all smisPosts
  Smisposts.findAllSmisPosts = (smisPostsId, result) => {
    let query = "SELECT * FROM smisposts";
    if (smisPostsId) {
      query += ` WHERE smisPosts = ${smisPostsId}`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("smisposts: ", res);
      result(null, res);
    });
  };

  //update smisPosts by their id
  Smisposts.updateSmisPostsById = (smisPostsId, smisposts, result) => {
    
    sql.query(
      `UPDATE smisPosts SET title = ? WHERE smisPostsId = ${smisPostsId}`,
      
      [ smisposts.title, 
        smisPostsId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found smisPosts with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated smisPosts: ", 
        { commentId: smisPostsId, ...smisposts });
        result(null, { smisPostsId: smisPostsId, ...smisposts });
      }
    );
  }

  //delete al smisPosts by id
  Smisposts.deleteSmisPosts = (smisPostsId, result) => {
    
    sql.query(`DELETE FROM smisPosts WHERE smisPostsId = ${smisPostsId}`, 
    
    smisPostsId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // not found smisPosts with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted smisPosts with Id: ", smisPostsId);
      result(null, res);
    });
  };

module.exports = Smisposts;