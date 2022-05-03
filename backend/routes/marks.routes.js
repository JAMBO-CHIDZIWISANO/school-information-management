
const marks = require("../mysqlcontroller/marks.controller")

module.exports = app =>{

    //routes/marks.routes.js
    /**
     * @swagger
     * /api/smis/mark/:markId:
     *   delete:
    *      description: delete a single lesson of a subject
    *      parameters:
    *        - name: markId
    *          description: enter markId to delete
    *          in: formData
    *          required: true
    *          type: string
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.delete("/api/smis/mark/:markId", marks.deleteMark);

// routes/marks.routes.js
/**
 * @swagger
 * /api/smis/addMark:
 *   post:
 *     description: add mark
 *     parameters:
 *      
 *      - name: student_score
 *        description: enter student score
 *        in: formData
 *        required: true
 *        type: integer
 *      - name: subjectCode
 *        description: code for subject
 *        in: formData
 *        required: true
 *        type: string
 *      - name: type
 *        description: enter type of exam
 *        in: formData
 *        required: true
 *        type: string
 *      - name: termId
 *        description: enter termid 1 or 2 or 3 not both
 *        in: formData
 *        required: true
 *        type: integer
 *      - name: studentId
 *        description: enter studnt username
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
    app.post("/api/smis/addMark", marks.create);

     //routes/marks.routes.js
    /**
     * @swagger
     * /api/smis/getAllMarks:
     *   get:
    *      description: get all marks or grades of the students
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllMarks", marks.findAllMarks);

     //routes/marks.routes.js
    /**
     * @swagger
     * /api/smis/mark/:markId:
     *   get:
    *      description: get one mark or grade of a student
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/mark/:markId", marks.findOneMark);

    //routes/marks.routes.js
    /**
     * @swagger
     * /api/smis/mark/:markId:
     *   put:
    *      description: update marks of a student
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.put("/api/smis/mark/:markId", marks.updateMarkById);

    //routes/marks.routes.js
    /**
     * @swagger
     * /api/smis/getAllStudentsMarks:
     *   get:
    *      description: get results of all students
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllStudentsMarks", marks.findAllStudentsGrades);

    //routes/marks.routes.js
    /**
     * @swagger
     * /api/smis/getForm1Results:
     *   get:
    *      description: get form one students results
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getForm1Results", marks.findForm1ExamResults);
    
    //routes/marks.routes.js
    /**
     * @swagger
     * /api/smis/getForm2Results:
     *   get:
    *      description: get form two students results
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getForm2Results", marks.findForm2ExamResults);

     //routes/marks.routes.js
    /**
     * @swagger
     * /api/smis/getForm3Results:
     *   get:
    *      description: get form 3 students results
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getForm3Results", marks.findForm3ExamResults);

     //routes/marks.routes.js
    /**
     * @swagger
     * /api/smis/getForm4Results:
     *   get:
    *      description: get form 4 students results
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getForm4Results", marks.findForm4ExamResults);

    


}
