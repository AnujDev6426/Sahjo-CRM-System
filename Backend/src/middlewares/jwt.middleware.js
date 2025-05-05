const jwt = require('jsonwebtoken');

const tokenGen = (userId, role) => {
    try {
        return jwt.sign({ userId, role }, process.env.JWT_SECRET, {expiresIn:'10h'})
    } catch (error) {
        throw new Error("Error Generating JWT", error);
    }
}


module.exports = {tokenGen}