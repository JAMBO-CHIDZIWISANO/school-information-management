
module.exports = app =>{

    const subject = require("../mysqlcontroller/subject.controller")

    var router = require("express").Router();

    //delete subject
    router.delete("/subject/:subjectCode", subject.deleteSubject);

    // create new subject
    router.post("/addSubject", subject.create);

    // get all subjects
    router.get("/getAllSubjects", subject.findAllSubjects);

    // count all subjects
    router.get("/countAllSubjects", subject.countAllSubjects);

    // get one subject
    router.get("/subject/:subjectCode", subject.findOneSubject);

    // get one subject
    router.get("/subject/grades/:subjectCode", subject.findStudentsGradesBySubjectCode);

    // get one subject
    router.get("/allstudents/subjects/:subjectCode", subject.findStudentsWhoTakeSubject);

    // get one subject
    router.get("/student/subject/:subjectCode", subject.findStudentsBySubjectCode);

    // update subject
    router.put("/subject/:subjectCode", subject.updateSubjectById);

    app.use("/api/smis", router);


}
