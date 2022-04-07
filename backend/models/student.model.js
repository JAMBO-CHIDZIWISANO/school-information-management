module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("students", {
        studentId: {
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
        DoB: {
            type: Sequelize.DATE
        }
       
      

    });
    return Student;
  };