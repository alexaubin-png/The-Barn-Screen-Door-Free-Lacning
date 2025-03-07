const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const SALT = 10
const User = require('../Schema/User.js');
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const cloudinary = require('cloudinary').v2; // Example for Cloudinary
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Temporary folder for image uploads
exports.registerNewUser = async (req,res) => {
  try{
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });
  console.log(req.body)
  // Validate input data
  
  if (!req.body.username || !req.body.password || !req.body.email) {
  throw new Error("Please provide username and password.");
  }
  const newUser = await user.save();//saving our new user because user is already in our database/schema
  res.status(201).json(newUser);//201 for successful registration/creation
  
  }catch(error){
  console.log( "registration error", error)
  res.status(500).json({message:"internal error"})
  }
  }
  exports.contactEmail = async (req, res) => {
    try{
        const { userEmail, userName, messageContent } = req.body

        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use Gmail service

            auth: {
                user: 'alexjames4674@gmail.com', // Replace with your Gmail address
                pass: 'jbsh nfsf zzka plnp', // Replace with your app password
            },
        });
        // const config = {
        //     service: 'gmail',
        //     auth: {
        //         user: EMAIL,
        //         pass: PASSWORD,
        //     }
        // }
        // let transporter = nodemailer.createTransport(config)

        let MailGenerator = new Mailgen({
            theme: 'default',
            product: {
                name: 'Alex-Aubin-Personal-Portfolio',
                link: 'https://mailgen.js',
            },
        })
        let response = {
            body: {
                name:  userName || 'Customer',
                intro: 'You have received a new message from the contact form.',
                table: {
                data : [
                    {
                        item: 'Message Content',
                        description: messageContent || 'thanks reaching out',
                    }
                ]
                },
                outro: "thanks for reaching out to us"
            }
        }
        const mail = MailGenerator.generate(response)
const message = {
    from: EMAIL,
    to: userEmail || 'alexjames4674@gmail.com',
    subject: "New Contact Form Message",
    html: mail
}

transporter.sendMail(message, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
    console.log('Mail sent: %s', info.messageId);
    return res.status(200).json({
        msg: 'Email sent successfully',
        info: info.messageId,
        preview: nodemailer.getTestMessageUrl(info),
    });
});
    // you can also handle the error here by returning a response with the error message
    // for now, we'll just return a success message
    // console.log('message send: %s', info, transporter)
    }catch(error){
        console.log("error sending bill")
        res.status(500).json(error.message)
    }
    // send the bill to the user's email
    // here you would put your logic to send the bill
    // for now, we'll just return a success message

  
// console.log('message send: %s', info, transporter)
  
}

  exports.loginUser = async (req, res) => {
      try {
          // Check if the user exists by username
          const user = await User.findOne({ username: req.body.username });
  
          if (!user) {
              return res.status(400).json({ message: 'Username not found' });
          }
  
          // Compare the provided password with the stored hashed password
          const validPassword = await bcrypt.compare(req.body.password, user.password);
  
          if (!validPassword) {
              return res.status(400).json({ message: 'Invalid password' });
          }
  
          // Optional: Check if the provided email matches the user's email (if that's required)
          if (req.body.email && req.body.email !== user.email) {
              return res.status(400).json({ message: 'Email does not match' });
          }
  
          // Ensure process.env.JWT_SECRET is defined and not empty
          if (!process.env.JWT_SECRET) {
              return res.status(500).json({ message: 'JWT_SECRET is not defined' });
          }
  
          // Create a JWT token with the user ID
          const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
          // Send the token back in the response
          res.status(200).json({ token });
      } catch (error) {
          console.error('Login error:', error);
          res.status(500).json({ message: 'Internal server error' });
      }
  };
  
exports.updateUser = async (req, res) => {
    try {
        const { theme, notifications, language, profilePicture } = req.body;
    
        // Find the user by ID and update the settings
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id, 
          {
            "settings.theme": theme,
            "settings.notifications": notifications,
            "settings.language": language,
            "settings.profilePicture": profilePicture
          },
          { new: true }  // Returns the updated document
        );
    
        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.status(200).json({
          message: "User settings updated successfully",
          user: updatedUser
        });
    
      } catch (error) {
        console.error("Error updating user settings:", error);
        res.status(500).json({ message: "Internal server error" });
      }
};
exports.deleteUser = async(req,res) => {
  try{
      const updatedUser = await User.findByIdAndDelete(req.params.id, req.body, { new: true })
      if (!updatedUser) {
          return res.status(404).json({ message: "User failed to delete!" });
      }
      res.status(200).json({ message: "User deleted successfully", user: updatedUser });
  }catch(error){
      console.error("error deleting user:", error);
      res.status(500).json({ message: "Internal server error" });
  }
}


exports.uploadProfilePicture = async (req, res) => {
  try {
    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Get the URL of the uploaded image
    const imageUrl = result.secure_url;

    // Update the user's profile picture URL in the database
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,  // req.user.id should be available from the JWT token
      { 'settings.profilePicture': imageUrl },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Profile picture uploaded successfully",
      imageUrl: imageUrl
    });

  } catch (error) {
    console.error("Error uploading profile picture:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
exports.uploadPicture = async(req, res) => {
    try {
        if (!req.file) {
          return res.status(400).send({ message: 'No file uploaded.' });
        }
    
        // Now you can proceed to upload the image to Cloudinary or another service
        res.status(200).json({
          message: 'Image uploaded successfully',
          imageUrl: req.file.path // Or you can upload this file to Cloudinary
        });
      } catch (error) {
        console.error('Error uploading file:', error);
        res.status(500).send({ message: 'Error uploading file' });
      }
}
exports.fetchUserProfile = async (req, res) => {
  try {
    const userId = req.params.userId; // updated from 'id' to 'userId'
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the profile data (e.g., username, profile picture URL)
    res.status(200).json({
      username: user.username,
      email: user.email,
      profilePicture: user.settings.profilePicture, // assuming this is how you store the profile picture URL
    });
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};