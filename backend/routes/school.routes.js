const school = require("../mysqlcontroller/school.controller")

module.exports = app =>{
    

// routes/marks.routes.js
/**
 * @swagger
 * /api/smis/add:
 *   post:
 *     description: add school
 *     parameters:
 *      
 *      - name: schoolId
 *        description: enter schoolId
 *        in: formData
 *        required: true
 *        type: integer
 *      - name: schoolName
 *        description: add school name
 *        in: formData
 *        required: true
 *        type: string
 *      - name: schoolAdress
 *        description: enter school address
 *        in: formData
 *        required: true
 *        type: string
 *      - name: schoolPhoneNo
 *        description: enter schoolphoneNo
 *        in: formData
 *        required: true
 *        type: integer
 *      - name: schoolLocation
 *        description: enter school location
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
  app.post("/api/smis/add", school.create);

 // routes/school.routes.js
/**
     * @swagger
     * /api/smis/getAllSchol:
     *   get:
    *      description: get all school
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
  app.get("/api/smis/getAllSchol", school.findAllSchool);

    // routes/school.routes.js
/**
     * @swagger
     * /api/smis/school/:schoolId:
     *   get:
    *      description: get one school
    *      
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
  app.get("/api/smis/school/:schoolId", school.findOneSchool);

  // routes/school.routes.js
/**
 * @swagger
 * /api/smis/school/:schoolId:
 *    put:
 *      description: update one school
 *      responses:
 *          200: 
 *              description: success
 */
  app.put("/api/smis/school/:schoolId", school.updateSchoolById);

}
