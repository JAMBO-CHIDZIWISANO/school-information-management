module.exports = (sequelize, Sequelize) => {
    const Smisposts = sequelize.define("smisposts", {
        smisPostsId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      smisPosts : {
          type: Sequelize.STRING,
          allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    });

    return Smisposts;
  };
