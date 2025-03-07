const express = require('express');
const { registerNewUser, loginUser, updateUser, contactEmail, uploadPicture, fetchUserProfile } = require('../controllers/authControllers');  // Import controller methods
const router = express.Router();  // Create a new router
const upload = require('../multerConfig');
// Define routes
router.post('/register', registerNewUser);  // Handle user registration
router.post('/login', loginUser);  // Handle user login
router.put('/update/:id', updateUser);  // Handle updating user information
router.post('/product/getbill', contactEmail)
router.post('/upload', upload.single('image'), uploadPicture); 
router.get('/users/:id/profile', fetchUserProfile)
  
module.exports = router;  // Export the router
