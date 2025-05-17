const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

  const Fleet = sequelize.define("Fleet", {
    fleet_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    driver_id: DataTypes.STRING,
    vehicle_no: DataTypes.STRING,
    length: DataTypes.INTEGER,
    weight_capacity: DataTypes.INTEGER,
    status: DataTypes.ENUM("busy", "available", "on-Service"),
  });


module.exports = { Fleet };
