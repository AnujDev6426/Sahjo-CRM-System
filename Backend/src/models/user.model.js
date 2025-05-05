const { DataTypes } = require("sequelize");
const {sequelize} = require("../config/db");

const User = sequelize.define("User", {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false
    },

    mobile: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('admin', 'employee'),
        allowNull:true
    },
    branch: {
        type: DataTypes.STRING,
        allowNull:true
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'disabled'),
      allowNull:false  
    },
    otp: {
      type: DataTypes.INTEGER,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: "users",
    timestamps: false
});

module.exports = {User};
