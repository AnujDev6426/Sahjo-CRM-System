const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

  const Orders = sequelize.define("Orders", {
    inventory_id: DataTypes.STRING,
    order_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    tranfer_type: DataTypes.ENUM("stock_transfer", "dispatch"),
    challan_id: DataTypes.STRING,
    order_status: DataTypes.ENUM("delivered", "pending", "in_transit", "delayed"),
  });

module.exports = { Orders };
