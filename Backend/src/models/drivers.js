const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

  const Drivers = sequelize.define("Drivers", {
    driver_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    phone: DataTypes.BIGINT,
    status: DataTypes.ENUM("active", "inactive", "terminated"),
    license_no: DataTypes.STRING,
  });


module.exports = { Drivers };
