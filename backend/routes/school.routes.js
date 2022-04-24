
module.exports = app =>{
    
    const school = require("../mysqlcontroller/school.controller")

    var router = require("express").Router();

    //create new school
    router.post("/add", school.create);

    //get all schools
   //router.get("/get", school.findAll);

     //get one school
    router.get("/school/:schoolId", school.findOneSchool);

    //update school
    router.put("/school/:schoolId", school.updateSchoolById);




     app.use("/api/smis/", router);


}
