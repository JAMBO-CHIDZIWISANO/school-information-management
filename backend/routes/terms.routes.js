
module.exports = app =>{
    
    const term = require("../mysqlcontroller/terms.controller")

    var router = require("express").Router();

    // //get all terms
    router.get("/getAllTerms", term.findAllTerms);

    app.use("/api/smis", router);
}
