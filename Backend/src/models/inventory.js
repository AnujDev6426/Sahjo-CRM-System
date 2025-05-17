const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

  const Inventory = sequelize.define("Inventory", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    consignor: DataTypes.STRING,
    consignee: DataTypes.BIGINT,
    entry_date: DataTypes.DATE,
    grNo: {
      type: DataTypes.BIGINT,
      unique: true,
    },
    source: DataTypes.STRING,
    destination: DataTypes.STRING,
    billNo: DataTypes.INTEGER,
    value: DataTypes.INTEGER,
    freight: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    cartage: DataTypes.INTEGER,
    dd: DataTypes.INTEGER,
    description: DataTypes.STRING,
    labour: DataTypes.INTEGER,
    other: DataTypes.INTEGER,
    remarks: DataTypes.STRING,
    total: DataTypes.INTEGER,
    order_id: DataTypes.STRING,
    branch_id: DataTypes.STRING,
    isOrdered: DataTypes.BOOLEAN,
    isBilty: DataTypes.BOOLEAN,
    status: DataTypes.ENUM("active", "inactive", "return"),
  });


module.exports = {Inventory}

