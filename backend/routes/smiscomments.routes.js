const smisComments = require("../mysqlcontroller/smiscomments.controller")

module.exports = app =>{

    // routes/smiscomments.routes.js

    /**
     * @swagger
     * /api/smis/smisComments/:smisCommentsId:
     *   delete:
    *      description: delete a single comment 
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.delete("/api/smis/smisComments/:smisCommentsId", smisComments.deleteSmisComments);

    // routes/smiscomments.routes.js

    /**
 * @swagger
 * /api/smis/addSmisComment:
 *   post:
 *     description: add comment
 *     parameters:
 *      
 *      - name: smisComments
 *        description: enter comment
 *        in: formData
 *        required: true
 *        type: string
 *      - name: username
 *        description: username
 *        in: formData
 *        required: true
 *        type: string
 *      - name: smisPostId
 *        description: post Id
 *        in: formData
 *        required: true
 *        type: integer
 *  
     *   responses:
     *      200:
     *         description: 'success'
     *         
     *         
     *     
     */
    app.post("/api/smis/addSmisComment", smisComments.create);

        // routes/smiscomments.routes.js

    /**
     * @swagger
     * /api/smis/getAllSmiscomments:
     *   get:
    *      description: Retrieve a list of comments
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllSmiscomments", smisComments.findAllSmisComments);

 // routes/smiscomments.routes.js

    /**
     * @swagger
     * /api/smis/smisComments/:smisPostsId:
     *   get:
    *      description: Retrieve a list of comments by post Id
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/smisComments/:smisPostsId", smisComments.findOneSmisComment);

    // routes/smiscomments.routes.js

    /**
     * @swagger
     * /api/smis/smisComments/:smisCommentsId:
     *   put:
    *      description: update a comment by comment Id
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.put("/api/smis/smisComments/:smisCommentsId", smisComments.updateSmisCommentById);

    

}
