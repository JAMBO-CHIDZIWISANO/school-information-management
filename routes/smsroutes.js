module.exports = (app)=>{

    const sms = require("../sns_sms/smsconfig.js");

    var router = require("express").Router();

    router.get("/sms", sms.sms);

    app.use("/api", router);
}