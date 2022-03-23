
module.exports = app =>{
    const subject = require("../mysqlcontroller/subject.controller")

    var router = require("express").Router();

    router.delete("/subject/:subjectCode", subject.deleteSubject);

    // //create new school
    router.post("/addSubject", subject.create);

    // //get all students
    router.get("/getAllSubjects", subject.findAllSubjects);

    // //get one school
    router.get("/subject/:subjectCode", subject.findOneSubject);

    // //update student
    router.put("/subject/:subjectCode", subject.updateSubjectById);


    app.use("/api/smis", router);


}
