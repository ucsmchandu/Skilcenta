const express=require('express')
const mailRouter=express.Router();
const {handleBuyEmail,handleContactEmail,handleSellEmail}=require('../controllers/mailcontrollers');


mailRouter.post("/buy",handleBuyEmail);
mailRouter.post("/sell",handleSellEmail);
mailRouter.post("/contact",handleContactEmail);



module.exports=mailRouter;