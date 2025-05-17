const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');


  const Employees = sequelize.define("Employees", {
    emp_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phone: {
      type: DataTypes.BIGINT,
      unique: true,
    },
    role: {
      type: DataTypes.ENUM("employee", "admin", "manager"),
      defaultValue: "employee",
    },
    password: DataTypes.STRING,
    branch_id: {
      type: DataTypes.STRING,
      references: {
        model: "Branches",
        key: "branch_id",
      },
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "terminated"),
      defaultValue: "active",
    },
  },
    {
      timestamps: true
  }
  );


module.exports = { Employees };
