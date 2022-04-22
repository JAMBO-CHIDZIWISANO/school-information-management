
//export sequelizer
module.exports = (sequelize, Sequelize) => {
  
  //create attendance table
    const SAtttendance = sequelize.define("student_attendance", {

      /*tables attributes*/
      //primary key 
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