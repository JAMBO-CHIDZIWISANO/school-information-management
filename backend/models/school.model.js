
//export sequelizer
module.exports = (sequelize, Sequelize) => {

  //create table school
    const School = sequelize.define("schools", {

      /**school table attributes */
      schoolId: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      schoolName: {
        type: Sequelize.STRING
      },
      schoolAdress: {
        type: Sequelize.STRING
      },
      schoolPhoneNo: {
        type: Sequelize.INTEGER
      },
      schoolLocation: {
        type: Sequelize.STRING
      }
    });
    return School;
  };