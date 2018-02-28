'use strict';
module.exports = (sequelize, DataTypes) => {
  var state = sequelize.define('state', {
    quesid: DataTypes.INTEGER,
    option: DataTypes.STRING,
    rt: DataTypes.BOOLEAN,
    username: DataTypes.STRING
  }, {});
  state.associate = function(models) {
    // associations can be defined here
  };
  return state;
};