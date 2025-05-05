const bcrypt = require('bcrypt');

const hashPass = async (password) => {
    const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password, salt);
}

const isPassValid = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

module.exports = { hashPass, isPassValid };