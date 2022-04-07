
module.exports = app =>{
    const file = require("../mysqlcontroller/files.controller")

    var router = require("express").Router();

    router.delete("/file/:fileId", file.deleteFile);

    // create new file
    router.post("/addFile", file.create);

    // get all file
    router.get("/getAllFiles", file.findAllFiles);

    //get one file
    router.get("/file/:fileId", file.findOneFile);

    // update student
    router.put("/file/:fileId", file.updateFileById);

    app.use("/api/smis", router);

}
