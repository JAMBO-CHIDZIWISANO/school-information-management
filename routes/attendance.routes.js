
module.exports = app =>{
    const attendance = require("../mysqlcontroller/attendance.controller")

    var router = require("express").Router();

    router.delete("/attendance/:attendenceId", attendance.deleteAttendance);

    // //create new school
    router.post("/addAttendance", attendance.create);

    // //get all students
    router.get("/getAllAttendances", attendance.findAllAttendances);

   // route for  all present
   router.get("/getAllPresent", attendance.findAllPresent);
   // route for all absent
   router.get("/getAllAbsent", attendance.findAllAbsent);

    // //get one school
    router.get("/attendance/:attendenceId", attendance.findOneAttendance);

    // //update student
    router.put("/attendance/:attendenceId", attendance.updateAttendanceById);


    app.use("/api/smis", router);


}
