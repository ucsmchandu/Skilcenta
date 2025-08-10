const { v2: cloudinary } = require("cloudinary");

cloudinary.config({
    cloudinary_url: process.env.CLOUDINARY_URL, 
    secure: true
});

console.log(" Cloudinary connected");

module.exports = cloudinary; 
