const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Inventory = sequelize.define('Inventory', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    branch: { type: DataTypes.STRING, allowNull: false },
    consignorName: { type: DataTypes.STRING, allowNull: false },
    consignorGst: { type: DataTypes.STRING, allowNull: true },
    consigneeName: { type: DataTypes.STRING, allowNull: false },
    consigneeGst: { type: DataTypes.STRING, allowNull: true },
    grNo: { type: DataTypes.STRING, allowNull: false },
    entry_date: { type: DataTypes.DATE, allowNull: false },
    from: { type: DataTypes.STRING, allowNull: false },
    to: { type: DataTypes.STRING, allowNull: false },
    billNo: { type: DataTypes.STRING, allowNull: false },
    value: { type: DataTypes.FLOAT, allowNull: true },
    ewayBill: { type: DataTypes.STRING, allowNull: true },
    freight: { type: DataTypes.FLOAT, allowNull: false },
    weight: { type: DataTypes.FLOAT, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    cartage: { type: DataTypes.INTEGER, allowNull: true },
    dd: { type: DataTypes.STRING, allowNull: true },
    description: { type: DataTypes.STRING, allowNull: false },
    labour: { type: DataTypes.FLOAT, allowNull: true },
    other: { type: DataTypes.FLOAT, allowNull: true },
    remarks: { type: DataTypes.STRING, allowNull: true },
    total: { type: DataTypes.FLOAT, allowNull: false },
    vehicle: { type: DataTypes.STRING, allowNull: true },
    exit_date: { type: DataTypes.DATE, allowNull: true },
    exit_type: { type: DataTypes.ENUM("Stock Transfer", "Delivery"), allowNull: true }
}, {
    tableName: 'inventory',
    timestamps: true
});

module.exports = {
    Inventory
}
