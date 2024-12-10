const jwt = require('jsonwebtoken');
const SECRET_KEY = "your_secret_key";

// Generate JWT
const generateToken = (user) => {
    return jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
};

// Verify JWT Middleware
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).send("Access Denied");
    try {
        req.user = jwt.verify(token, SECRET_KEY);
        next();
    } catch (err) {
        res.status(403).send("Invalid Token");
    }
};

module.exports = { generateToken, verifyToken };
