const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

  const Inventory = sequelize.define("Inventory", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    consignor: DataTypes.STRING,
    consignor_gst:DataTypes.STRING,
    consignee: DataTypes.STRING,
    consignee_gst:DataTypes.STRING,
    grNo: {
      type: DataTypes.INTEGER,
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
  },
    {
    timestamps:true
  }
  );


module.exports = {Inventory}

