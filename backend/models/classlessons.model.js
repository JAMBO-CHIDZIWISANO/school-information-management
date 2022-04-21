module.exports = (sequelize, Sequelize) => {
    const ClassLessons = sequelize.define("classLessons", {
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