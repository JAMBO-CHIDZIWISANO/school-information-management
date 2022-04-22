
//export sequelize
module.exports = (sequelize, Sequelize) => {
  
  //create table terms
  const Term = sequelize.define("terms", {

    /**term table attributes */
      termId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      termName: {
        type: Sequelize.STRING
      }
    });
    return Term;
  };