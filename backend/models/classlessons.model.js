
//export sequelizer module
module.exports = (sequelize, Sequelize) => {

  //create lessons table
    const ClassLessons = sequelize.define("classLessons", {

      /** class table attributes */
      lessonId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      day: {
        type: Sequelize.STRING
      },
      lesson_startTime: {
        type: Sequelize.TIME
      },
      lesson_endTime: {
        type: Sequelize.TIME
      },
      
    });
    return ClassLessons;
  };