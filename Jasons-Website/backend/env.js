require('dotenv').config();  // Load environment variables from .env file

module.exports = {
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
};
