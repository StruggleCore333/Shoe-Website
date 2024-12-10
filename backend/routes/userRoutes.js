const express = require('express');
const bcrypt = require('bcryptjs');
const { generateToken, verifyToken } = require('../auth/auth');

const router = express.Router();

const users = []; // Simulated user database

// Register Route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send("User registered!");
});

// Login Route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (user && await bcrypt.compare(password, user.password)) {
        const token = generateToken(user);
        res.json({ token });
    } else {
        res.status(401).send("Invalid credentials");
    }
});

// Protected Route
router.get('/profile', verifyToken, (req, res) => {
    res.json({ user: req.user });
});

module.exports = router;
