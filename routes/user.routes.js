const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {

  //routes authentication(make it private)
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  //get public content
  app.get("/api/smis/all", controller.allAccess);

  //accesses by all users content
  app.get( "/api/smis/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  //get teacher content
  app.get("/api/smis/teacher",
    [authJwt.verifyToken, authJwt.isTeacher],
    controller.teacherBoard
  );

  //get to admin content
  app.get("/api/smis/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard,
  );

  //get student content
  app.get("/api/smis/student",
    [authJwt.verifyToken, authJwt.isStudent],
    controller.studentBoard
    );
  

  //get parent content
  app.get("/api/smis/parent",
    [authJwt.verifyToken, authJwt.isParent],
    controller.parentBoard
  );

};