const express=require('express')
const mailRouter=express.Router();
const {handleAdminBuyEmail,handleAdminSellEmail,handleContactEmail,handleCustomerBuyEmail,handleCustomerSellEmail}=require('../controllers/mailcontrollers');


mailRouter.post("/customer/buy",handleCustomerBuyEmail);
mailRouter.post("/admin/buy",handleAdminBuyEmail)
mailRouter.post("/customer/sell",handleCustomerSellEmail);
mailRouter.post("/admin/sell",handleAdminSellEmail)
mailRouter.post("/contact",handleContactEmail);



module.exports=mailRouter;