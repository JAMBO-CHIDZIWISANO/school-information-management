
module.exports = app =>{
    const school = require("../controllers/school.controller.js")

    var router = require("express").Router();

    //create new school
    router.post("/add", school.create);

    //get all schools
    router.get("/get", school.findAll);

    //get one school
    router.get("/:schoolId", school.findOne);

    //update school
    router.put("/:schoolId", school.update);


    app.use("/api/school/detail", router);


}
