const { Branches } = require('./models/branches');
const { Employees } = require('./models/employees');
const { sequelize } = require('./config/db');

// Define associations before syncing
Branches.hasMany(Employees, { foreignKey: 'branch_id', as: 'employees' });
Employees.belongsTo(Branches, { foreignKey: 'branch_id', as: 'branch' });

// sequelize.sync({ force: true })
//     .then(() => {
//         console.log('Database & tables recreated!');
//     })
//     .catch((error) => {
//         console.error('Sync error:', error);
//     });

// Optional: export for use elsewhere
// module.exports = { Branches, Employees };
