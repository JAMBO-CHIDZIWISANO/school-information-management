module.exports = (sequelize, Sequelize) => {
    const Class = sequelize.define("classes", {
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