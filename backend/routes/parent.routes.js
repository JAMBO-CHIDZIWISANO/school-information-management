
module.exports = app =>{
    const parent = require("../mysqlcontroller/parent.controller")

    var router = require("express").Router();

    //delete parent
    router.delete("/parent/:parentId", parent.deleteParent);

    // create new parent
    router.post("/addParent", parent.create);

    // get all parent
    router.get("/getAllParents", parent.findAllParents);

    router.get("/getLastUsername", parent.findUsername);

    // get one parent
    router.get("/parent/:parentId", parent.findOneParent);

     // get one parent
     router.get("/parents/:username", parent.findLoggedInParent);

    // update parent
    router.put("/parent/:parentId", parent.updateParentById);

    app.use("/api/smis", router);


}
