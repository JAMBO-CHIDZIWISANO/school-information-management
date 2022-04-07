module.exports = (sequelize, Sequelize) => {
    const Smiscomments = sequelize.define("smiscomments", {
        smisCommentsId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      smisComments: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    });
    return Smiscomments;
  };