module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
      postId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      postTitle: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      postBody: {
        type: Sequelize.STRING,
        allowNull: false,

      },
      username : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    });
    Post.associate = (models) => {
      Post.hasMany(models.Comment, {
        onDelete: "cascade",
      });
    };
    return Post;
  };