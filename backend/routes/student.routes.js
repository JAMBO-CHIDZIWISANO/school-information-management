const student = require("../mysqlcontroller/student.controller")

module.exports = (app) =>{
    


    // routes/student.routes.js

    /**
     * @swagger
     * /api/smis/student/:studentId:
     *   delete:
    *      description: delete a single student 
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.delete("/api/smis/student/:studentId", student.deleteStudent);

    // //create new students
    app.post("/api/smis/addStudent", student.create);

    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/getStudentsId:
     *   get:
    *      description: Retrieve a list of id
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.get("/api/smis/getStudentsId", student.studentsId);

    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/getAllStudents:
     *   get:
    *      description: Retrieve a list of all students
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllStudents", student.findAllStudents);

     // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/getForm1Students:
     *   get:
    *      description: Retrieve form 1
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.get("/api/smis/getForm1Students", student.findForm1Students);

    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/getForm2Students:
     *   get:
    *      description: Retrieve form 2 students
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.get("/api/smis/getForm2Students", student.findForm2Students);

    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/getForm3Students:
     *   get:
    *      description: Retrieve form 3 students
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getForm3Students", student.findForm3Students);

     // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/getForm4Students:
     *   get:
    *      description: Retrieve form 4 students
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.get("/api/smis/getForm4Students", student.findForm4Students);

    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/getNumberOfMaleAndFemaleStudents:
     *   get:
    *      description: compare male and female number in there respective classes
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getNumberofAllStudents", student.findNumberOfMaleAndFemaleStudents);

     // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/getNumberOfMaleAndFemaleStudents:
     *   get:
    *      description: # of all students
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getNumberofAllStudents", student.countAllStudents);

     // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/timetable/:studentId:
     *   get:
    *      description: # of all students
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/timetable/:studentId", student.studentTimetable);

     // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/student/subjects/:studentId:
     *   get:
    *      description: # of all students
    *      responses:
     *         200:
     *            description: success
     *         
     */ 
     app.get("/api/smis/student/subjects/:studentId", student.studentSubjects);

     // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/subjects/count/:studentId:
     *   get:
    *      description: # of all students take subject
    *      responses:
     *         200:
     *            description: success
     *         
     */ 
     app.get("/api/smis/subjects/count/:studentId", student.countStudentSubjects);

     // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/subjects/enteredmark/:studentId:
     *   get:
    *      description: # of all students
    *      responses:
     *         200:
     *            description: success
     *         
     */ 
     app.get("/api/smis/subjects/enteredmark/:studentId", student.countEnterMarksSubjects);


    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/student/:studentId:
     *   get:
    *      description: # of all students
    *      responses:
     *         200:
     *            description: success
     *         
     */
    app.get("/api/smis/student/:studentId", student.findOneStudent);

      // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/student/exam/:studentId:
     *   get:
    *      description: # of all students
    *      responses:
     *         200:
     *            description: success
     *         
     */
    app.get("/api/smis/student/exam/:studentId", student.studentExamResults);

   // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/timetable/:studentId:
     *   get:
    *      description: # of all students
    *      responses:
     *         200:
     *            description: success
     *         
     */
   app.get("/api/smis/timetable/:studentId", student.studentTimetable);

    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/studentinfo/:studentId:
     *   get:
    *      description: students info
    *      responses:
     *         200:
     *            description: success
     *         
     */
    app.get("/api/smis/studentinfo/:studentId", student.studentPersonalInfo);


    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/term2exam/:studentId:
     *   get:
    *      description: term 2 exam
    *      responses:
     *         200:
     *            description: success
     *         
     */
   app.get("/api/smis/term2exam/:studentId", student.studentPersonalInfoTerm2);

    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/term3exam/:studentId:
     *   get:
    *      description: term 3 exam
    *      responses:
     *         200:
     *            description: success
     *         
     */
   app.get("/api/smis/term3exam/:studentId", student.studentPersonalInfoTerm3);

    // routes/student.routes.js
     /**
     * @swagger
     * /api/smis/student/:studentId:
     *   put:
    *      description: update student
    *      responses:
     *         200:
     *            description: success
     *         
     */
    app.put("/api/smis/student/:studentId", student.updateStudentById);

    
}
