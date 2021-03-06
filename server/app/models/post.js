'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.belongsToMany(models.Tag, {
      through: 'PostsTags',
      as: 'tags',
      foreignKey: 'postId'
    });
    Post.belongsTo(models.Category, {
      foreignKey: 'categoryId'
    })
  };
  return Post;
};