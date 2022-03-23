
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


    app.use("/api/smis", router);


}
