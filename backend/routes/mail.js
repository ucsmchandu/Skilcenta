const express=require('express')
const mailRouter=express.Router();
const {sendMail}=require('../controllers/mailcontrollers');
mailRouter.post('/post',sendMail);


module.exports=mailRouter;