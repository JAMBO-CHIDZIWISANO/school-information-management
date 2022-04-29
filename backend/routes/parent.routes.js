
module.exports = app =>{
    const parent = require("../mysqlcontroller/parent.controller")

    var router = require("express").Router();

    //delete parent
    router.delete("/parent/:parentId", parent.deleteParent);

    // create new parent
    router.post("/addParent", parent.create);

    // get all parent
    router.get("/getAllParents", parent.findAllParents);

    // get all parent
    router.get("/parent/childrenInfo/:parentId", parent.childrenPersonalInfo);


    router.get("/getLastUsername", parent.findUsername);

    // get one parent
    router.get("/parent/:parentId", parent.findOneParent);

    // get one parent
    router.get("/childrenExam/:parentId", parent.findChildrenExamByparnetId);

     // get one parent
     router.get("/parents/:username", parent.findLoggedInParent);

     // get one parent
     router.get("/children/:parentId", parent.findChildrenByPUsername);

    // update parent
    router.put("/parent/:parentId", parent.updateParentById);

    app.use("/api/smis", router);


}
