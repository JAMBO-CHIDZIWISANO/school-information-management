
module.exports = app =>{
    const comment = require("../mysqlcontroller/comments.controller")

    var router = require("express").Router();

    router.delete("/comment/:commentId", comment.deleteComment);

    // create new comment
    router.post("/addComment", comment.create);

    // get all comment
    router.get("/getAllComments", comment.findAllComments);

    //get one comment
    router.get("/comment/:commentId", comment.findOneComment);

    // update student
    router.put("/comment/:commentId", comment.updateCommentById);

    app.use("/api/smis", router);

}
