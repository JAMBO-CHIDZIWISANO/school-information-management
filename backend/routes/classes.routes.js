
const classes = require("../mysqlcontroller/classes.controller")
module.exports = app =>{

    

    

    // routes/classes.routes.js

    /**
     * @swagger
     * /api/smis/getAllClasses:
     *   get:
    *      description: Retrieve a list of classes
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllClasses", classes.findAllClasses);

   

}