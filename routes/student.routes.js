
module.exports = app =>{
    const student = require("../mysqlcontroller/student.controller")

    var router = require("express").Router();

    router.delete("/student/:studentId", student.deleteStudent);

    // //create new school
    router.post("/addStudent", student.create);

    // //get all students
    router.get("/getAllStudents", student.findAllStudents);

     // //get all students
     router.get("/getForm1Students", student.findForm1Students);

     // //get all students
     router.get("/getForm2Students", student.findForm2Students);

    // //get all students
    router.get("/getForm3Students", student.findForm3Students);

     // //get all form3 students
     router.get("/getForm4Students", student.findForm4Students);


    // //get one school
    router.get("/student/:studentId", student.findOneStudent);

    // //update student
    router.put("/student/:studentId", student.updateStudentById);


    app.use("/api/smis", router);


}
