
module.exports = app =>{
    
    const teacher = require("../mysqlcontroller/teacher.controller")

    var router = require("express").Router();

    //delete teacher
    router.delete("/teacher/:teacherId", teacher.deleteTeacher);

    //get all teachers
    router.get("/getAllTeachers", teacher.findAllTeachers);

     //count  all teachers
     router.get("/countAllTeachers", teacher.countAllTeachers);

    //get all teachers
    router.get("/getAllTeachersTimetable", teacher.findAllTeachersTimetable);

    //get all teachers username
    router.get("/getAllTeacherId", teacher.teachersId);

    //get one teacher
    router.get("/teacher/:teacherId", teacher.findOneTeacher);

     //get one teacher timetable
     router.get("/teacher-timetable/:teacherId", teacher.findTeacherTimetable);

    //update teacher
    router.put("/teacher/:teacherId", teacher.updateTeacherById);

    //create new teacher
    router.post("/addTeacher", teacher.create);

    app.use("/api/smis/", router);
}
