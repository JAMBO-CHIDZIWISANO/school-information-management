
const subject = require("../mysqlcontroller/subject.controller")

module.exports = app =>{



    // routes/subject.routes.js

    /**
     * @swagger
     * /api/smis/subject/:subjectCode:
     *   delete:
    *      description: delete a single comment 
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.delete("/api/smis/subject/:subjectCode", subject.deleteSubject);
 // routes/subject.routes.js
    
 /**
 * @swagger
 * /api/smis/addSubject:
 *   post:
 *     description: add comment
 *     parameters:
 *      
 *      - name: subjectCode
 *        description: enter code
 *        in: formData
 *        required: true
 *        type: string
 *      - name: subjectName
 *        description: subject name
 *        in: formData
 *        required: true
 *        type: string
 *      - name: teacherId
 *        description: teacher username
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
    app.post("/api/smis/addSubject", subject.create);

    // routes/subject.routes.js
    /**
     * @swagger
     * /api/smis/getAllSubjects:
     *   get:
    *      description: Retrieve a list of subjects
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllSubjects", subject.findAllSubjects);

    // routes/subject.routes.js
    /**
     * @swagger
     * /api/smis/countAllSubjects:
     *   get:
    *      description: count a list of subjects
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/countAllSubjects", subject.countAllSubjects);

     // routes/subject.routes.js
    /**
     * @swagger
     * /api/smis/subject/:subjectCode:
     *   get:
    *      description: retrieve by code
    *      responses:
     *         200:
     *            description: success
     *         
     */  
    app.get("/api/smis/subject/:subjectCode", subject.findOneSubject);

      // routes/subject.routes.js
    /**
     * @swagger
     * /api/smis/subject/total/:subjectCode:
     *   get:
    *      description: total students
    *      responses:
     *         200:
     *            description: success
     *         
     */
     app.get("/api/smis/subject/total/:subjectCode", subject.findOneTotal);

    // routes/subject.routes.js
    /**
     * @swagger
     * /api/smis/subject/grades/:subjectCode:
     *   get:
    *      description: get grades of students
    *      responses:
     *         200:
     *            description: success
     *         
     */
    app.get("/api/smis/subject/grades/:subjectCode", subject.findStudentsGradesBySubjectCode);

      // routes/subject.routes.js
    /**
     * @swagger
     * /api/smis/allstudents/subjects/:subjectCode:
     *   get:
    *      description: get  students who take certain subjects
    *      responses:
     *         200:
     *            description: success
     *         
     */
    app.get("/api/smis/allstudents/subjects/:subjectCode", subject.findStudentsWhoTakeSubject);

     // routes/subject.routes.js
    /**
     * @swagger
     * /api/smis/student/subject/:subjectCode:
     *   get:
    *      description: get  students who take certain subjects
    *      responses:
     *         200:
     *            description: success
     *         
     */
    app.get("/api/smis/subject/:subjectCode", subject.findStudentsBySubjectCode);

    // routes/subject.routes.js
    /**
     * @swagger
     * /api/smis/student/subject/:subjectCode:
     *   put:
    *      description: get  students who take certain subjects
    *      responses:
     *         200:
     *            description: success
     *         
     */
    app.put("/api/smis/subject/:subjectCode", subject.updateSubjectById);

    


}
