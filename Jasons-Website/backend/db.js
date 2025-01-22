const mongoose = require('mongoose');
// Replace <your_connection_string> with the actual connection string provided by MongoDB Atlas
const MONGO_URI = process.env.MONGO_URI;

async function connect() {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGO_URI, {

    }).then(() => {//a JS promise that returns a console message when a successfull connection is established
      console.log('MongoDB connection established successfully');
    }).catch((error) => {
      console.error('MongoDB connection failed:', error);
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connect, mongoose };