module.exports = (sequelize, Sequelize) => {
    const Total = sequelize.define("totals", {
        totalId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      totalScore: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
    return Total;
  };