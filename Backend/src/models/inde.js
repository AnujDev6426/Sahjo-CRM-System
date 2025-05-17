const Employees = require('./employees');
const Branches = require('./branches');

Branches.hasMany(Employees, { foreignKey: 'branch_id', as: 'employees' });
Employees.belongsTo(Branches, { foreignKey: 'branch_id', as: 'branch' });
