
//export sequelize table
module.exports = (sequelize, Sequelize) => {

  //create users table
    const User = sequelize.define("users", {

      /** users table attributes*/
      username: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
      
    });
    return User;
  };