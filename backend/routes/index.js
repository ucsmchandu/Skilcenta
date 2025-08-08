const express=require('express');
const router=express.Router();
const mailRouter=require('./mail');

router.use('/mailto',mailRouter);
//remaing

module.exports=router;