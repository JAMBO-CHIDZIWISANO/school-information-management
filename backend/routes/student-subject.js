
module.exports = app =>{

    const ssubject = require("../mysqlcontroller/student_subjects.controller")

    var router = require("express").Router();

    //delete subject
    router.delete("/ssubject/:studentId", ssubject.deleteSSubject);

    // create new subject
    router.post("/addSSubject", ssubject.create);

    // get all subjects
    router.get("/getAllssubject", ssubject.findAllSSubjects);

    // get one subject
    router.get("/ssubject/:studentId", ssubject.findOneSSubject);

    // update subject
    router.put("/ssubject/:studentId", ssubject.updateSubjectById);

    app.use("/api/smis", router);


}
