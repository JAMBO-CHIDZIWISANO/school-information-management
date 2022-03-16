
module.exports = app =>{
    const teacher = require("../mysqlcontroller/teacher.controller")

   
    var router = require("express").Router();

    //create new school
    router.delete("/:teacherId", teacher.deleteTeacher);

    //get all schools
    router.get("/getAllTeachers", teacher.findAllTeachers);

    //get one school
    router.get("/:teacherId", teacher.findOneTeacher);

    //update school
    router.put("/:teacherId", teacher.updateTeacherById);

    router.post("/addTeacher", teacher.create);




    app.use("/api/smis/", router);


}
