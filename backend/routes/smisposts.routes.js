
module.exports = app =>{

    const smisPosts = require("../mysqlcontroller/smisposts.controller")

    var router = require("express").Router();

    //delete smisPosts
    router.delete("/smisPosts/:smisPostsId", smisPosts.deleteSmisPost);

    // create new subject
    router.post("/addSmisPosts", smisPosts.create);

    // get all subjects
    router.get("/getAllSmisPosts", smisPosts.findAllSmisposts);

    // get one subject
    router.get("/smisPosts/:smisPostsId", smisPosts.findOneSmisPost);

    // update subject
    router.put("/smisPosts/:smisPostsId", smisPosts.updateSmisPostById);

    app.use("/api/smis", router);
}
