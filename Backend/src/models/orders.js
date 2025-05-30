const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

  const Orders = sequelize.define("Orders", {
    inventory_id: DataTypes.STRING,
    order_id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    transfer_type: DataTypes.ENUM("stock_transfer", "dispatch"),
    challan_id: DataTypes.STRING,
    order_status: DataTypes.ENUM("delivered", "pending", "in_transit", "delayed"),
  });


// sequelize.sync({alter:true})
//     .then(() => {
//         console.log('Database & tables recreated!');
//     })
//     .catch((error) => {
//         console.error('Sync error:', error);
//     });

module.exports = { Orders };
