

//export sequelize module
module.exports = (sequelize, Sequelize) => {

  //create classes table
    const Class = sequelize.define("classes", {
      /* class table attributes*/ 
      classId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      className: {
        type: Sequelize.STRING
      }
    });
    return Class;
  };