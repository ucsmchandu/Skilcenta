const express=require('express');
const router=express.Router();
const mailRouter=require('./mail');
const fileRouter=require('./files');
//remaing

router.use('/mail',mailRouter);
router.use('/files',fileRouter);
//remaing

module.exports=router;