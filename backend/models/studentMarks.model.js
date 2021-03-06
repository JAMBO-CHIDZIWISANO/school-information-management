module.exports = (sequelize, Sequelize) => {
    const Mark = sequelize.define("student_marks", {
      markId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      
      student_score: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      }
    });
    return Mark;
  };