
module.exports = app =>{
    const marks = require("../mysqlcontroller/marks.controller")

    var router = require("express").Router();

    router.delete("/mark/:markId", marks.deleteMark);

    // //create new school
    router.post("/addMark", marks.create);

    // //get all students
    router.get("/getAllMarks", marks.findAllMarks);

    // //get one school
    router.get("/mark/:markId", marks.findOneMark);

    // //update student
    router.put("/mark/:markId", marks.updateMarkById);


    router.get("/getAllStudentsMarks", marks.findAllStudentsGrades);

    router.get("/getForm1Results", marks.findForm1ExamResults);
    
    router.get("/getForm2Results", marks.findForm2ExamResults);

    router.get("/getForm3Results", marks.findForm3ExamResults);

    router.get("/getForm4Results", marks.findForm4ExamResults);

    app.use("/api/smis", router);


}
