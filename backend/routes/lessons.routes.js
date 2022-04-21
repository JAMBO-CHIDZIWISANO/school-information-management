
module.exports = app =>{
    const lesson = require("../mysqlcontroller/classlesson.controller")

    var router = require("express").Router();

    router.delete("/lesson/:lessonId", lesson.deleteLesson);

    // create new lesson
    router.post("/addLesson", lesson.create);

    // get all lesson
    router.get("/getAllLessons", lesson.findAllLessons);

    // get all lesson
    router.get("/getAllRooms", lesson.findAllRooms);

    
    // get all lesson
    router.get("/getAllLessonTeacher", lesson.findAllLessonTeacher);

    //get one lesson
    router.get("/lesson/:lessonId", lesson.findOneLesson);

    // update student
    router.put("/lesson/:lessonId", lesson.updateLessonById);

    app.use("/api/smis", router);

}
