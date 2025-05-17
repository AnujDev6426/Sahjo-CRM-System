const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

  const Branches = sequelize.define("Branches", {
    branch_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    address: DataTypes.JSON,
    created_At: DataTypes.DATE,
  });

module.exports = {Branches};
