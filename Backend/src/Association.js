const {Branches} = require('./models/branches');
const {Employees} = require('./models/employees');

Branches.hasMany(Employees, { foreignKey: 'branch_id', as: 'employees' });
Employees.belongsTo(Branches, { foreignKey: 'branch_id', as: 'branch' });

console.log('Association read')

// module.exports = { Branches, Employees };
