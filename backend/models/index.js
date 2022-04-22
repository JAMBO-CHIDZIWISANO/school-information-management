
//calling database configuration
const config = require("../config/db.config.js");

//initialise sequelizer
const Sequelize = require("sequelize");

//sequelizing database
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
    },
    define: {
      timestamps: false
    },
   }
);

//database sequelize construct
const db = {};

//sequelize all db tables to the mysql server
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/user.models")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.teacher = require("../models/teacher.model.js")(sequelize, Sequelize);
db.parent = require("../models/parent.model.js")(sequelize, Sequelize);
db.student = require("../models/student.model.js")(sequelize, Sequelize);
db.school = require("../models/school.model")(sequelize, Sequelize);
db.subject = require("../models/subject.model")(sequelize, Sequelize);
db.classlesson = require("../models/classlessons.model")(sequelize,Sequelize);
db.classroom = require("../models/classrooms.model")(sequelize, Sequelize);
db.class = require("../models/class.model")(sequelize, Sequelize);
db.term = require("../models/terms.model")(sequelize, Sequelize);
db.mark = require("../models/studentMarks.model")(sequelize, Sequelize);
db.attendance = require("../models/attendance.model")(sequelize, Sequelize);
db.smiscomments = require("../models/smiscomments.model")(sequelize, Sequelize);
db.smisposts = require("../models/Smisposts.model")(sequelize, Sequelize);

//1 to 1 relationship between teachers and users
db.user.hasOne(db.teacher, {
    foreignKey: "userId",
    targetKey: "userId"});

//1 to 1 relationship between students and users 
db.user.hasOne(db.student, {
    foreignKey: "userId",
    targetKey: "userId"});

//1 to 1 relationship between parents and users
db.user.hasOne(db.parent, {
    foreignKey: "userId",
    targetKey: "userId",
  });

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

//one to many relationship between parent and student
db.parent.hasMany(db.student, {
  foreignKey: "parentId",
  targetKyKey: "parentId",
  onDelete: "cascade",
  onUpdate: "cascade"
});

//one to many relationship smiscomments and smisposts
db.smisposts.hasMany(db.smiscomments, {
  foreignKey: "smisPostsId",
  targetKyKey: "smisPostsId",
  onDelete: "cascade",
  onUpdate: "cascade"
});

//one to many relationship between school and student
db.school.hasMany(db.student, {
  foreignKey: "schoolId",
  targetKyKey: "schoolId",
  onDelete: "cascade",
  onUpdate: "cascade"
});

//one to many relationship school and teacher
db.school.hasMany(db.teacher, {
  foreignKey: "schoolId",
  targetKyKey: "schoolId",
  onDelete: "cascade",
  onUpdate: "cascade"
});

//one to many relationships teacher and students
db.teacher.hasMany(db.classlesson, {
  foreignKey: "teacherId",
  targetKey: "teacherId",
  onDelete: "cascade",
  onUpdate: "cascade"
});

//one to many relationships teacher and students
db.class.hasMany(db.classlesson, {
  foreignKey: "classId",
  targetKey: "classId",
  onDelete: "cascade",
  onUpdate: "cascade"
});

//one to many relationship between lesson and room
db.classroom.hasMany(db.classlesson, {
  foreignKey: "roomId",
  targetKey: "roomId"
});

//one to many subject and lesson
db.subject.hasMany(db.classlesson, {
  foreignKey: ("subjectCode"),
  targetKey: "subjectCode"
});

// one to many term and marks
db.term.hasMany(db.mark, {
  foreignKey: "termId",
  targetKey: "termId"
})

// one to many student and marks
db.student.hasMany(db.mark, {
  foreignKey: "studentId",
  targetKey: "studentId",
  onDelete: "cascade",
  onUpdate: "cascade"
});

// one to many class and student
db.class.hasMany(db.student,{
  foreignKey: "classId",
  targetKey: "classId"
});

//one to many student and attendance
db.student.hasMany(db.attendance, {
  foreignKey: "studentId",
  targetKey: "studentId",
  onDelete: "cascade",
  onUpdate: "cascade"
});

//one to many term and attendance
db.term.hasMany(db.attendance, {
  foreignKey: "termId",
  targetKey: "termId"
});

//one to many subject and mark relatiobship
db.subject.hasMany(db.mark, {
  foreignKey: "subjectCode",
  targetKey: "subjectCode"
});

module.exports = db;