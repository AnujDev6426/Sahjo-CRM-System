const jwt = require('jsonwebtoken');
const {isTokenBlacklisted} = require('./tokenRevoke')

const tokenGen = (userId, role) => {
    try {
        return jwt.sign({ userId, role }, process.env.JWT_SECRET, {expiresIn:'10h'})
    } catch (error) {
        throw new Error("Error Generating JWT", error);
    }
}

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        return res.status(400).json({ message: 'Access Token Not Found!' });
    }
    try {

        const isBlacklisted = await isTokenBlacklisted(token);
        if (isBlacklisted) {
            return res.status(401).json({ status: false, message: 'Unauthorized' });
        }

        const isVerified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = isVerified;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
}


module.exports = {tokenGen, verifyToken}  