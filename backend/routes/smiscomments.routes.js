
module.exports = app =>{

    const smisComments = require("../mysqlcontroller/smiscomments.controller")

    var router = require("express").Router();

    //delete subject
    router.delete("/smisComments/:smisCommentsId", smisComments.deleteSmisComments);

    // create new subject
    router.post("/addSmisComment", smisComments.create);

    // get all subjects
    router.get("/getAllSmiscomments", smisComments.findAllSmisComments);

    // get one subject
    router.get("/smisComments/:smisPostsId", smisComments.findOneSmisComment);

    // update subject
    router.put("/smisComments/:smisCommentsId", smisComments.updateSmisCommentById);

    app.use("/api/smis", router);


}
