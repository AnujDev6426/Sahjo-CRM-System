const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

  const Session = sequelize.define("Session", {
    session_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    token: {
      type: DataTypes.BLOB,
      unique: true,
    },
    emp_id: DataTypes.STRING,
    created_At: DataTypes.DATE,
    logout_At: DataTypes.DATE,
  });

module.exports = { Session };
