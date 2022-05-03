
const parent = require("../mysqlcontroller/parent.controller")

module.exports = app =>{


    //routes/parent.routes.js
    /**
     * @swagger
     * /api/smis/parent/:parentId:
     *   delete:
    *      description: delete a single lesson of a subject
    *      parameters:
    *        - name: parentId
    *          description: enter parentId to delete
    *          in: formData
    *          required: true
    *          type: string
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.delete("/api/smis/parent/:parentId", parent.deleteParent);

    // routes/parent.routes.js
/**
 * @swagger
 * /api/smis/addParent:
 *   post:
 *     description: add parent
 *     parameters:
 *      
 *      - name: parentId
 *        description: enter parent username
 *        in: formData
 *        required: true
 *        type: string
 *      - name: firstname
 *        description: enter first name
 *        in: formData
 *        required: true
 *        type: string
 *      - name: surname
 *        description: enter surname
 *        in: formData
 *        required: true
 *        type: string
 *      - name: gender
 *        description: enter parent gender
 *        in: formData
 *        required: true
 *        type: string
 *      - name: phoneNo
 *        description: enter phone number
 *        in: formData
 *        required: true
 *        type: integer
 *      - name: address
 *        description: enter phone number
 *        in: formData
 *        required: true
 *        type: string
 *      - name: userId
 *        description: enter userId its a foreign key to table of users
 *        in: formData
 *        required: true
 *        type: string
     *   responses:
     *      200:
     *         description: 'success'
     *         
     *         
     *     
     */
    app.post("/api/smis/addParent", parent.create);

     //routes/parent.routes.js
    /**
     * @swagger
     * /api/smis/getAllParents:
     *   get:
    *      description: get all parents
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */    
    app.get("/api/smis/getAllParents", parent.findAllParents);

    //routes/parent.routes.js
    /**
     * @swagger
     * /api/smis/parent/childrenInfo/:parentId:
     *   get:
    *      description: get all children info of one parent
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/parent/childrenInfo/:parentId", parent.childrenPersonalInfo);


    //routes/parent.routes.js
    /**
     * @swagger
     * /api/smis/parent/:parentId:
     *   get:
    *      description: get one parent info 
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/parent/:parentId", parent.findOneParent);

     //routes/parent.routes.js
    /**
     * @swagger
     * /api/smis/childrenExam/:parentId:
     *   get:
    *      description: get one parent childrens' exam 
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */    
    app.get("/api/smis/childrenExam/:parentId", parent.findChildrenExamByparnetId);

 //routes/parent.routes.js
    /**
     * @swagger
     * /api/smis/parents/:username:
     *   get:
    *      description: get one parent whose logged into the system 
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.get("/api/smis/parents/:username", parent.findLoggedInParent);

     
 //routes/parent.routes.js
    /**
     * @swagger
     * /api/smis/children/:parentId:
     *   get:
    *      description: get one parent children by parent username 
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.get("/api/smis/children/:parentId", parent.findChildrenByPUsername);

      //routes/parent.routes.js
    /**
     * @swagger
     * /api/smis/parent/:parentId:
     *   put:
    *      description: update a parent info 
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */

    app.put("/api/smis/parent/:parentId", parent.updateParentById);




}
