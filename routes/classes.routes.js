module.exports = app =>{

    const classes = require("../mysqlcontroller/classes.controller")

    var router = require("express").Router();

    // //get all students
    router.get("/getAllClasses", classes.findAllClasses);

    app.use("/api/smis", router);

}