
//export sequelize
module.exports = (sequelize, Sequelize) => {

    //create table parents
    const Parent = sequelize.define("parents", {

        /**parents table attributes */
        parentId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        firstname: {
            type: Sequelize.STRING
        },
       
        surname: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        phoneNo: {
            type: Sequelize.INTEGER
        },
        address: {
            type: Sequelize.STRING
        }
      

    });
    return Parent;
  };