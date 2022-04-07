
module.exports = app =>{
    const post = require("../mysqlcontroller/post.controller")

    var router = require("express").Router();

    //delete post
    router.delete("/post/:postId", post.deletePost);

    // create new post
    router.post("/addPost", post.create);

    // get all posts
    router.get("/getAllPosts", post.findAllPosts);

    // get one post
    router.get("/post/:postId", post.findOnePost);

    // update post
    router.put("/post/:postId", post.updatePostById);

    app.use("/api/smis", router);

}
