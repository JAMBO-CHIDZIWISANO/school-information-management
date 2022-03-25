module.exports = (sequelize, Sequelize) => {
    const SAtttendance = sequelize.define("student_attendance", {
      attendenceId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      attendanceDate:{
        type: Sequelize.DATE,
      },
      present: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      absentReason: {
          type: Sequelize.STRING
      },
      
    });
    return SAtttendance;
  };