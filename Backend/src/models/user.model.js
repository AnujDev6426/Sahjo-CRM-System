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
        allowNull: false,
        
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive', 'disabled'),
      allowNull:false  
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: "user",
    timestamps: true
});

module.exports = {User};
