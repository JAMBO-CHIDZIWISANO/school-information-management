
module.exports = app =>{
    const marks = require("../mysqlcontroller/marks.controller")

    var router = require("express").Router();

    router.delete("/mark/:markId", marks.deleteMark);

    // create new mark
    router.post("/addMark", marks.create);

    // get all students marks
    router.get("/getAllMarks", marks.findAllMarks);

    // //get mark for one student
    router.get("/mark/:markId", marks.findOneMark);

    // update student marks
    router.put("/mark/:markId", marks.updateMarkById);

    //get all students marks with students details
    router.get("/getAllStudentsMarks", marks.findAllStudentsGrades);

    //get results for all form one students
    router.get("/getForm1Results", marks.findForm1ExamResults);
    
    //get results for all form two students
    router.get("/getForm2Results", marks.findForm2ExamResults);

    //get results for all form three students
    router.get("/getForm3Results", marks.findForm3ExamResults);

    //get results for all form four students
    router.get("/getForm4Results", marks.findForm4ExamResults);

    app.use("/api/smis", router);


}
