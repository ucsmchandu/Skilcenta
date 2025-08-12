const express=require('express');
const router=express.Router();
const mailRouter=require('./mail');
const fileRouter=require('./files');
//remaing

router.use('/mail',mailRouter);//main route for the mail
router.use('/files',fileRouter);//mail route for the resources
//remaing

module.exports=router;