const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// MySQL database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hyperstep"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Database connection failed: " + err.stack);
        return;
    }
    console.log("Connected to database.");
});

// User registration endpoint
app.post('/hyperstep', (req, res) => {
    const sql = "INSERT INTO `login`(`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password 
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Error");
        } 
        return res.json(data);
    });
});

// User login endpoint
app.post('/hyperstep/login', (req, res) => {
    const { email, password } = req.body;
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    
    db.query(sql, [email, password], (err, results) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Database error" });
        }
        if (results.length > 0) {
            return res.json({ success: true }); // User found
        } else {
            return res.json({ success: false }); // User not found
        }
    });
});

// Fetch products endpoint
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM product_details', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Add a product to the cart
app.post('/api/cart', (req, res) => {
    const { user_id, product_id, quantity, title, price, img, cate } = req.body;
    const sql = "INSERT INTO cart (user_id, product_id, quantity, title, price, img, cate) VALUES (?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?";
    const values = [user_id, product_id, quantity, title, price, img, cate, quantity];

    db.query(sql, values, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(201).json({ message: "Product added to cart", cartId: result.insertId });
    });
});

// Get cart items for a user
app.get('/api/cart/:user_id', (req, res) => {
    const userId = req.params.user_id;
    const sql = `
        SELECT c.id, c.quantity, p.title AS title, p.price AS price, p.img AS img, p.cate AS cate 
        FROM cart c 
        JOIN product_details p ON c.product_id = p.id 
        WHERE c.user_id = ?`;

    db.query(sql, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

// Update cart item quantity
app.put('/api/cart/:cart_id', (req, res) => {
    const cartId = req.params.cart_id;
    const { quantity } = req.body;
    const sql = "UPDATE cart SET quantity = ? WHERE id = ?";
    
    db.query(sql, [quantity, cartId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Cart item updated" });
    });
});

// Remove item from cart
app.delete('/api/cart/:cart_id', (req, res) => {
    const cartId = req.params.cart_id;
    const sql = "DELETE FROM cart WHERE id = ?";
    
    db.query(sql, [cartId], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.status(200).json({ message: "Cart item removed" });
    });
});

// Get user data
app.get('/api/user/:user_id', (req, res) => {
    const userId = req.params.user_id;
    const sql = "SELECT * FROM login WHERE id = ?";
    
    db.query(sql, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]); // Return the first user found
    });
});

// Update user data
app.put('/api/user/:user_id', (req, res) => {
    const userId = req.params.user_id;
    const { name, password } = req.body;
    const sql = "UPDATE login SET name = ?, password = ? WHERE id = ?";
    
    db.query(sql, [name, password, userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "User  updated successfully!" });
    });
});

// Delete user account
app.delete('/api/user/:user_id', (req, res) => {
    const userId = req.params.user_id;
    const sql = "DELETE FROM login WHERE id = ?";
    
    db.query(sql, [userId], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "User  deleted successfully!" });
    });
});


// Start the server
app.listen(8081, () => {
    console.log("Server is currently listening on port 8081");
});