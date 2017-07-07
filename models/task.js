'use strict';
module.exports = function(sequelize, DataTypes) {
  var task = sequelize.define('task', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      task: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        allowNull:false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
 
  })
  
   return task;
};
