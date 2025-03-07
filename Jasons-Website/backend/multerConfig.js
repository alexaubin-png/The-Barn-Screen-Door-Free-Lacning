// multerConfig.js

const multer = require('multer');

// Set storage engine for Multer to store files in a temporary folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Specify the folder where files will be stored temporarily
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Set file name to include a timestamp
  }
});

const upload = multer({ storage: storage }); // Initialize multer with storage

module.exports = upload;
