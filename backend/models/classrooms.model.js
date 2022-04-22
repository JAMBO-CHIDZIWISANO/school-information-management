
//export sequelizer
module.exports = (sequelize, Sequelize) => {
  
  //create classroom table
  const Classrooms = sequelize.define("classrooms", {

     /**rooms table attributes */
      roomId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      roomName: {
        type: Sequelize.STRING
      }
    });
    return Classrooms;
  };