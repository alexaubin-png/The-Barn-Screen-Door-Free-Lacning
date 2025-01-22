const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');  // import routes
const { connect } = require('./db.js');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 1010;  // Use environment variable for portability

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/users', authRoutes);  // Delegate all '/users' routes to authRoutes

// Optionally, you can keep additional routes or APIs here if needed
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from the server!' });
});

// Start the server
app.listen(PORT, () => {
    connect()
    console.log(`Server is running on port ${PORT}`);
});
