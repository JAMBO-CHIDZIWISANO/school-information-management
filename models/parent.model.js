module.exports = (sequelize, Sequelize) => {
    const Parent = sequelize.define("parents", {
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