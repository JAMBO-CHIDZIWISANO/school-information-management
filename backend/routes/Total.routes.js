
module.exports = app =>{
    const total = require("../mysqlcontroller/Total.controller")

    var router = require("express").Router();

    
    // create new total
    router.post("/addTotal", total.create);

    // get one total
    router.get("/total/:totalId", total.findOneTotal);

    
    // get one total
    router.put("/total/:totalId", total.updateTotalById);

     //delete teacher
     router.delete("/total/:totalId", total.deleteTotal);


    app.use("/api/smis", router);

}
