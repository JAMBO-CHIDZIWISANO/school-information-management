module.exports = (sequelize, Sequelize) => {
    const Subject = sequelize.define("subjects", {
      subjectCode: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      subjectName: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
    return Subject;
  };