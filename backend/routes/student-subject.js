const ssubject = require("../mysqlcontroller/student_subjects.controller")

module.exports = app =>{



        // routes/student-subject.js
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
    app.delete("/api/smis/ssubject/:studentId", ssubject.deleteSSubject);

    
    // routes/student-subject.js

    /**
 * @swagger
 * /api/smis/addSSubject:
 *   post:
 *     description: add subject
 *     parameters:
 *      
 *      - name: studentId
 *        description: enter studentId
 *        in: formData
 *        required: true
 *        type: string
 *      - name: subjectCode
 *        description: subjectCode
 *        in: formData
 *        required: true
 *        type: string
 *     
     *   responses:
     *      200:
     *         description: 'success'
     *         
     *         
     *     
     */
    app.post("/api/smis/addSSubject", ssubject.create);

    // routes/student-subject.js

    /**
     * @swagger
     * /api/smis/getAllssubject:
     *   get:
    *      description: Retrieve a list of comments
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllssubject", ssubject.findAllSSubjects);

    
    // routes/student-subject.js

    /**
     * @swagger
     * /api/smis/ssubject/:studentId:
     *   get:
    *      description: Retrieve a list of comments
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/ssubject/:studentId", ssubject.findOneSSubject);

    // routes/student-subject.js

    /**
     * @swagger
     * /api/smis/ssubject/:studentId:
     *   put:
    *      description: update subject
    *      responses:
     *         200:
     *            description: success
     *         
     */  
    app.put("/api/smis/ssubject/:studentId", ssubject.updateSubjectById);



}
