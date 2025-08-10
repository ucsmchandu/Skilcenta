const express=require('express');
const fileRouter=express.Router();
// const upload=require('../utils/multer');
const {handleUploadFile, handleGetFile} =require('../controllers/filecontrollers');

fileRouter.post('/upload/file',handleUploadFile);
fileRouter.get('/get/file',handleGetFile);

module.exports=fileRouter;