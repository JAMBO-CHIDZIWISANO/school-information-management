

//export sequelize module
module.exports = (sequelize, Sequelize) => {

    //create ayear table
      const Ayear = sequelize.define("academicyear", {
        /* ayea table attributes*/ 
        ayearId: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        academicyear: {
          type: Sequelize.STRING
        }
      });
      return Ayear;
    };