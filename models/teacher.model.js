module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teachers", {
        teacherId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        firstname: {
            type: Sequelize.STRING
        },
       
        surname: {
            type: Sequelize.STRING
        },
        phoneNo: {
            type: Sequelize.INTEGER
        },
        gender: {
            type: Sequelize.STRING
        },
      qualification: {
        type: Sequelize.STRING
      },
      joinDate: {
          type: Sequelize.DATE
      }

      

    });
    return Teacher;
  };