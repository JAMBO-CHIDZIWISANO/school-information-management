const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.models")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.teacher = require("../models/teacher.model.js")(sequelize, Sequelize);
db.parent = require("../models/parent.model.js")(sequelize, Sequelize);
db.student = require("../models/student.model.js")(sequelize, Sequelize);

//teachers and users table 1 to 1 relationship
db.user.hasOne(db.teacher, {
    foreignKey: "userId",
    targetKey: "userId"});
//students and users table 1 to 1 relationship
db.user.hasOne(db.student, {
    foreignKey: "userId",
    targetKey: "userId"});

//parents and users table 1 to 1 relationship
db.user.hasOne(db.parent, {
    foreignKey: "userId",
    targetKey: "userId"});

//many to many relationship between user and role table
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});


module.exports = db;