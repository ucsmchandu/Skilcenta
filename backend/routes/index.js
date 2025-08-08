const express=require('express');
const router=express.Router();
const mailRouter=require('./mail');
//remaing

router.use('/mail',mailRouter);
//remaing

module.exports=router;