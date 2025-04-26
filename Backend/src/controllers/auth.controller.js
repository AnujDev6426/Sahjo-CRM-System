const login = async (req, res) => {
    const { userName, password } = req.body;
    if (!userName || !password) {
        return res.status(400).json({ message: 'Username or Password cannot be empty!' })
    }
    try {
        if (userName == process.env.ADMIN_NAME && password == process.env.ADMIN_PASS) {
            return res.status(200).json({ message: 'Welcome Admin' })
        }
        else {
            return res.status(400).json({ message: 'Invalid Username or Password!' })
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error while logging in!' })
    }
}

module.exports = { login }