const express = require('express');
const { registerNewUser, loginUser, updateUser, contactEmail } = require('../controllers/authControllers');  // Import controller methods
const router = express.Router();  // Create a new router

// Define routes
router.post('/register', registerNewUser);  // Handle user registration
router.post('/login', loginUser);  // Handle user login
router.put('/update', updateUser);  // Handle updating user information
router.post('/product/getbill', contactEmail)

module.exports = router;  // Export the router
