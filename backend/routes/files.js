const express=require('express');
const fileRouter=express.Router();
// const upload=require('../utils/multer');
const {handleUploadFile, handleGetFile} =require('../controllers/filecontrollers');

fileRouter.post('/upload/file',handleUploadFile);//for uploading the resource
fileRouter.get('/get/files',handleGetFile);//to get the all files form the db

module.exports=fileRouter;