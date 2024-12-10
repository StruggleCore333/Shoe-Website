const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "hyperstep"
});

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

// New route to fetch products
app.get('/api/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});

app.get('/', (req, res) => {
    res.send('Server is running');
});


app.listen(8081, () => {
    console.log("listening");
});