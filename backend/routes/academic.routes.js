module.exports = app =>{

    const year = require("../mysqlcontroller/academicyear.controller")

    var router = require("express").Router();

    // //get all years
    router.get("/getAllAYears", year.findAllAcademic);

    //post academic year
    router.post('/addYear', year.create)

    app.use("/api/smis", router);

}