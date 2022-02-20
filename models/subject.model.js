module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define("subjects", {
      subjectId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      subjectName: {
        type: Sequelize.STRING
      }
    });
    return Subject;
  };