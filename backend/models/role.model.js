
//export sequelizer
module.exports = (sequelize, Sequelize) => {

  //creating roles tables
    const Role = sequelize.define("roles", {

      /**roles tables attributes */
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
    });
    return Role;
  };