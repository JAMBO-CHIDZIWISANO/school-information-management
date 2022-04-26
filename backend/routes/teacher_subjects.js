
module.exports = app =>{

    const tsubject = require("../mysqlcontroller/teacher_subject.model")

    var router = require("express").Router();

    //delete subject
    router.delete("/ssubject/:studentId", tsubject.deleteTSubject);

    // create new subject
    router.post("/addTSubject", tsubject.create);

    // get all subjects
    router.get("/getAllssubject", tsubject.findAllTSubjects);

    // get one subject
    router.get("/ssubject/:studentId", tsubject.findOneTSubject);

    // update subject
    router.put("/ssubject/:studentId", tsubject.updateTSubjectById);

    app.use("/api/smis", router);


}
