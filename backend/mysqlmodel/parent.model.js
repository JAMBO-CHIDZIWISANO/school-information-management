const sql = require("../models/mysqldb")

//constructor 
const Parent = function(parent) {
    this.parentId = parent.parentId;
    this.firstname = parent.firstname;
    this.surname = parent.surname;
    this.gender = parent.gender;
    this.address = parent.address;
    this.phoneNo = parent.phoneNo;
    this.userId = parent.userId;    
}

//insert a parent into a system
Parent.create = (newParent, result)=> {
    
    sql.query("INSERT INTO parents SET ?", newParent, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("created parent: ", { parentId: res.insertParentId, ...newParent });
    result(null, { parentId: res.insertParentId, ...newParent });
        
    })
}

//retrieving single parent object
Parent.findParentById = (parentId, result) => {
    sql.query(`SELECT * FROM parents WHERE parentId LIKE '%${parentId}%'`, (err, res) => {
      
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res) {
        console.log("found parent: ", res);
        result(null, res);
        return;
      }
      // not found parents with the id
      result({ kind: "not_found" }, null);
    });
  };

//retrieve logged parent data
Parent.findParentByUsername = (username, result) => {
  sql.query(`select parents.surname, users.email from parents join users on users.username=parents.userId where users.username like '%${username}%'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    //return the results
    if (res) {
      console.log("found parent: ", res);
      result(null, res);
      return;
    }
    // not found parents with the id
    result({ kind: "not_found" }, null);
  });
};

//retrieving all parents
Parent.findAllParents = (surname, result) => {
  let query = "SELECT * FROM parents";
  if (surname) {
    query += ` WHERE surname LIKE '%${surname}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("parents: ", res);
    result(null, res);
  });
};

//update parent by their id
Parent.updateParentById = (parentId, parent, result) => {
  
  sql.query(
    `UPDATE parents SET firstname = ?, surname = ?, phoneNo = ?, gender = ?, address = ?, userId = ? WHERE parentId LIKE '${parentId}'`
    
    [ parent.firstname, 
      parent.PhoneNo, 
      parent.surname, 
      parent.gender, 
      parent.address, 
      parent.userId, 
      parentId],

    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {

        // not found parent with the id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("updated parent: ", 
      { parentId: parentId, ...parent });
      result(null, { parentId: parentId, ...parent });
    }
  );
}

//delete al parent by id
Parent.deleteParent = (parentId, result) => {
      
  sql.query("DELETE FROM parents WHERE parentId = ?", 
  
  parentId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      // not found parent with the id
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("deleted parent with parentId: ", parentId);
    result(null, res);
  });
};

module.exports = Parent;