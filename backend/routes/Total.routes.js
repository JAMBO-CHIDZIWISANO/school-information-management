const total = require("../mysqlcontroller/Total.controller")

module.exports = (app) =>{

    // create new total

    
// routes/Total.routes.js

/**
 * @swagger
 * /api/smis/addTotal:
 *   post:
 *     description: add classes
 *     parameters:
 *      
 *      - name: totalScore
 *        description: enter totalScore
 *        in: formData
 *        required: true
 *        type: integer
 *      - name: subjectCode
 *        description: code for subject in which total is setted
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
    app.post("/api/smis/addTotal", total.create);

    // routes/Total.routes.js
/**
 * @swagger
 * /api/smis/total/{totalId}:
 *  get:
 *      description: get one total score
 *      responses:
 *          200: 
 *              description: success
 */
    app.get("/api/smis/total/:totalId", total.findOneTotal);

    
    // get one total
    app.put("/api/smis/total/:totalId", total.updateTotalById);

     //delete teacher
     app.delete("/api/smis/total/:totalId", total.deleteTotal);


    

}
