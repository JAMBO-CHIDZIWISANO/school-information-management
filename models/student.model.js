module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("students", {
        teacherId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        firstname: {
            type: Sequelize.STRING
        },
        middlename: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      }
      

    });
    return Student;
  };