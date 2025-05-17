const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

  const Branches = sequelize.define("Branches", {
    branch_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.JSON,
  }, {
    timestamps:true
  });

module.exports = {Branches};
