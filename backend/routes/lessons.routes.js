const lesson = require("../mysqlcontroller/classlesson.controller")
module.exports = (app) =>{
    

    
// routes/lessons.routes.js

    /**
     * @swagger
     * /api/smis/lesson/:lessonId:
     *   delete:
    *      description: delete a single lesson of a subject
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.delete("/api/smis/lesson/:lessonId", lesson.deleteLesson);


   // routes/lessons.routes.js

    /**
 * @swagger
 * /api/smis/addLesson:
 *   post:
 *     description: add mark
 *     parameters:
 *      
 *      - name: day
 *        description: enter student score
 *        in: formData
 *        required: true
 *        type: string
 *      - name: lesson_startTime
 *        description: lesson start time
 *        in: formData
 *        required: true
 *        type: time
 *      - name: lesson_endTime
 *        description: lesson end time
 *        in: formData
 *        required: true
 *        type: time
 *      - name: subjectCode
 *        description: enter subjectCode
 *        in: formData
 *        required: true
 *        type: string
 *      - name: classId
 *        description: enter studnt username
 *        in: formData
 *        required: true
 *        type: integer
 *      - name: roomId
 *        description: enter classroom number
 *        in: formData
 *        required: true
 *        type: integer
     *   responses:
     *      200:
     *         description: 'success'
     *         
     *         
     *     
     */
    app.post("/api/smis/addLesson", lesson.create);



    // routes/lessons.routes.js

    /**
     * @swagger
     * /api/smis/getAllLessons:
     *   get:
    *      description: Retrieve a list of lessons
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllLessons", lesson.findAllLessons);

    // routes/lessons.routes.js

    /**
     * @swagger
     * /api/smis/getAllRooms:
     *   get:
    *      description: Retrieve a list of classrooms
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllRooms", lesson.findAllRooms);

    
    // routes/lessons.routes.js

    /**
     * @swagger
     * /api/smis/getAllLessonTeacher:
     *   get:
    *      description: Retrieve a list of teachers' lesson
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("/api/smis/getAllLessonTeacher", lesson.findAllLessonTeacher);

    
    // routes/lessons.routes.js

    /**
     * @swagger
     * /api/smis/lesson/:lessonId:
     *   get:
    *      description: Retrieve one subject lesson of a teacher
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.get("api/smis/lesson/:lessonId", lesson.findOneLesson);

    // routes/lessons.routes.js

    /**
     * @swagger
     * /api/smis/lesson/:lessonId:
     *   put:
    *      description: update a lesson
    *      responses:
     *         200:
     *            description: success
     *         
     *     
     */
    app.put("/api/smis/lesson/:lessonId", lesson.updateLessonById);

    
}
