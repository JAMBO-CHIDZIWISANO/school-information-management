
    const smisPosts = require("../mysqlcontroller/smisposts.controller")

module.exports = app =>{



     // routes/smisposts.routes.js

    /**
     * @swagger
     * /api/smis/smisPosts/:smisPostsId:
     *   delete:
    *      description: delete a single comment 
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.delete("/api/smis/smisPosts/:smisPostsId", smisPosts.deleteSmisPost);

     // routes/smisposts.routes.js

    /**
 * @swagger
 * /api/smis/addSmisPosts:
 *   post:
 *     description: add post
 *     parameters:
 *      
 *      - name: title
 *        description: enter comment
 *        in: formData
 *        required: true
 *        type: string
 *      - name: smisPosts
 *        description: post body
 *        in: formData
 *        required: true
 *        type: string
 *      - name: username
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
    app.post("/api/smis/addSmisPosts", smisPosts.create);

    // routes/smisposts.routes.js

    /**
     * @swagger
     * /api/smis/getAllSmisPosts:
     *   get:
    *      description: Retrieve a list of posts
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllSmisPosts", smisPosts.findAllSmisposts);

        // routes/smisposts.routes.js

    /**
     * @swagger
     * /api/smis/getAllSmisPosts:
     *   get:
    *      description: Retrieve a list of posts
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/smisPosts/:smisPostsId", smisPosts.findOneSmisPost);

    // routes/smisposts.routes.js

    /**
     * @swagger
     * /api/smis/smisPosts/:smisPostsId:
     *   put:
    *      description: update post
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.put("/api/smis/smisPosts/:smisPostsId", smisPosts.updateSmisPostById);

    }
