
module.exports = app =>{
    const student = require("../controllers/student.controller.js")

    var router = require("express").Router();

    // //create new school
    router.post("/add", student.create);

    // //get all schools
    // router.get("/get", school.findAll);

    // //get one school
    // router.get("/:schoolId", school.findOne);

    // //update school
    // router.put("/:schoolId", school.update);


    app.use("/api/student", router);


}
