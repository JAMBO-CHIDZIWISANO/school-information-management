module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
      postId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },

      postTitle: {
        type: Sequelize.STRING
      },
      postBody: {
        type: Sequelize.STRING
      }
    });
    return Post;
  };