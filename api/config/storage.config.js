
// Requiring Cloudinary to store the profile images
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Requiring multer library to upload images
const multer = require('multer');

// Cloudinary configuration with variables in .env
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

// Route to Cloudinary folder
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Vecinity-App'
  },
});

// Exports
module.exports = multer({ storage: storage });