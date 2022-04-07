const sql = require("../models/mysqldb")

//constructor 
const File = function(file) {
    this.fileId = file.fileId;
    this.file = file.file;
    // this.teacherId = file.teacherId;
    // this.parentId = file.parentId;
    

    
}
//insrt a file into a system
File.create = (newFile, result)=> {
    
    sql.query("INSERT INTO files SET ?", newFile, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        
    console.log("Uploaded Files: ", { fileId: res.insertFileId, ...newFile });
    result(null, { fileId: res.insertFileId, ...newFile });
        
    })
}

//retrieving one file
File.findFileById = (fileId, result) => {
    sql.query(`SELECT * FROM files WHERE fileId = ${fileId}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("Found File: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found file with the id
      result({ kind: "not_found" }, null);
    });
  };

  //retrieving all files
  File.findAllFiles = (fileName, result) => {
    let query = "SELECT * FROM files";
    if (fileName) {
      query += ` WHERE fileName LIKE '%${fileName}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      console.log("Files: ", res);
      result(null, res);
    });
  };

  //update file by their id
  File.updateFileById = (fileId, file, result) => {
    
    sql.query(
      "UPDATE files SET fileName = ? WHERE fileId = ?",
      
      [ file.fileName, 
        fileId],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {

          // not found file with the id
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("Updated file: ", 
        { fileId: fileId, ...file });
        result(null, { fileId: fileId, ...comment });
      }
    );
  }

  //delete al file by id
  File.deleteFile = (fileId, result) => {
    
    sql.query("DELETE FROM files WHERE fileId = ?", 
    
    fileId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        // no found file with that id
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("deleted file with Id: ", fileId);
      result(null, res);
    });
  };

module.exports = File;