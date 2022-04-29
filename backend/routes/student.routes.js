
module.exports = app =>{
    
    const student = require("../mysqlcontroller/student.controller")

    var router = require("express").Router();

    //delete a students (might not be used)
    router.delete("/student/:studentId", student.deleteStudent);

    // //create new students
    router.post("/addStudent", student.create);

     // //create new students
     router.get("/getStudentsId", student.studentsId);

    // //get all students
    router.get("/getAllStudents", student.findAllStudents);

     // //get all form 1 students
     router.get("/getForm1Students", student.findForm1Students);

     // //get all form 2 students
     router.get("/getForm2Students", student.findForm2Students);

    // //get allform 3  students
    router.get("/getForm3Students", student.findForm3Students);

     // //get all form 4 students
     router.get("/getForm4Students", student.findForm4Students);

    //get all form 4 students
    router.get("/getNumberOfMaleAndFemaleStudents", student.findNumberOfMaleAndFemaleStudents);

    //get all form 4 students
    router.get("/getNumberofAllStudents", student.countAllStudents);

    // //get all form 1 students
    router.get("/timetable/:studentId", student.studentTimetable);

     // //get all form 1 students
     router.get("/student/subjects/:studentId", student.studentSubjects);

     // //get all form 1 students
     router.get("/subjects/count/:studentId", student.countStudentSubjects);

     // //get all form 1 students
     router.get("/subjects/enteredmark/:studentId", student.countEnterMarksSubjects);


    // //get one student
    router.get("/student/:studentId", student.findOneStudent);

    // //get exam results for one student
    router.get("/student/exam/:studentId", student.studentExamResults);

    // //get exam results for one student
    router.get("/studentinfo/:studentId", student.studentPersonalInfo);

    // //update student
    router.put("/student/:studentId", student.updateStudentById);

    app.use("/api/smis", router);


}
