
const teacher = require("../mysqlcontroller/teacher.controller")

module.exports = app =>{
    

    // routes/teacher.routes.js

    /**
     * @swagger
     * /api/smis/teacher/:teacherId:
     *   get:
    *      description: delete teacher
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.delete("/api/smis/teacher/:teacherId", teacher.deleteTeacher);

     // routes/teacher.routes.js

    /**
     * @swagger
     * /api/smis/getAllTeachers:
     *   get:
    *      description: Retrieve a list of teachers
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllTeachers", teacher.findAllTeachers);

     // routes/teacher.routes.js

    /**
     * @swagger
     * /api/smis/countAllTeachers:
     *   get:
    *      description: get all teachers
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.get("/api/smis/countAllTeachers", teacher.countAllTeachers);

     // routes/teacher.routes.js

    /**
     * @swagger
     * /api/smis/getAllTeachersTimetable:
     *   get:
    *      description: get all teachers time tablr
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllTeachersTimetable", teacher.findAllTeachersTimetable);

    // routes/teacher.routes.js

    /**
     * @swagger
     * /api/smis/getAllTeacherId:
     *   get:
    *      description: get all teachers ids
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllTeacherId", teacher.teachersId);

    // routes/teacher.routes.js

    /**
     * @swagger
     * /api/smis/teacher/:teacherId:
     *   get:
    *      description: get all teachers ids
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/teacher/:teacherId/teacher/:teacherId", teacher.findOneTeacher);

     // routes/teacher.routes.js

    /**
     * @swagger
     * /api/smis/teacher-timetable/:teacherId:
     *   get:
    *      description: get all teachers ids
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.get("/api/smis/teacher-timetable/:teacherId", teacher.findTeacherTimetable);

    
     // routes/teacher.routes.js

    /**
     * @swagger
     * /api/smis/teacher-subjects/:teacherId:
     *   get:
    *      description: get subjects by teacherId
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
     app.get("/api/smis/teacher-subjects/:teacherId", teacher.findTeacherSubjects);

     // routes/teacher.routes.js

    /**
     * @swagger
     * /api/smis/teacher/:teacherId:
     *   put:
    *      description: update teacher by teacherId
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.put("/api/smis/teacher/:teacherId", teacher.updateTeacherById);

    
    app.post("/api/smis/addTeacher", teacher.create);

    
}
