const { default: Keyv } = require('keyv');

const keyv = new Keyv();
keyv.on('error', err => console.error('Keyv error:', err));


async function blacklistToken(token, ttlSeconds = 3600) {
    if (!token) return;
    await keyv.set(`blacklist:${token}`, true, ttlSeconds * 1000);
}

async function isTokenBlacklisted(token) {
    if (!token) return false;
    return (await keyv.get(`blacklist:${token}`)) === true;
}

module.exports = {
    blacklistToken,
    isTokenBlacklisted,
};