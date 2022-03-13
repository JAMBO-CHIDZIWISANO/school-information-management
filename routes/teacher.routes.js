
module.exports = app =>{
    const teacher = require("../mysqlcontroller/teacher.controller")

   
    var router = require("express").Router();

    //create new school
    //router.post("/add", school.create);

    //get all schools
   //router.get("/get", school.findAll);

    //get one school
    //router.get("/:schoolId", school.findOne);

    //update school
    //router.put("/:schoolId", school.update);

    router.post("/add", teacher.create);




    app.use("/api/school/teacher", router);


}
