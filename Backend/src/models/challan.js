const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

  const Challan = sequelize.define("Challan", {
    challan_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    fleet_id: DataTypes.STRING,
    date: DataTypes.DATE,
    source: DataTypes.STRING,
    destination: DataTypes.STRING,
    challan_no: DataTypes.INTEGER,
    total_freight: DataTypes.INTEGER,
    cross_less: DataTypes.INTEGER,
    balance: DataTypes.INTEGER,
    goods: DataTypes.JSON,
    emp_id: DataTypes.STRING,
  });

module.exports = { Challan };
