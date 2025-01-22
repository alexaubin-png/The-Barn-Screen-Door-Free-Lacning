const { mongoose } = require('../db.js');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    }, 
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    // Add any additional fields you want to include here
})



module.exports = mongoose.model('User', UserSchema); // This will create a 'User' collection in your MongoDB database.