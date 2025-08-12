const multer=require('multer');
const {CloudinaryStorage}=require("multer-storage-cloudinary");
const cloudconnect=require('./cloudinary')

const storage=new CloudinaryStorage({
    cloudinary:cloudconnect,
    params:{
        folder:"resources-pdf",
         resource_type: "auto", //auto matically detects the file img for pdf
    }
});

const upload=multer({storage});
module.exports=upload;