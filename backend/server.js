const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', userRoutes);

app.listen(3001, () => {
    console.log("Backend running on http://localhost:3001");
});
