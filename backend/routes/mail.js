const express=require('express')
const mailRouter=express.Router();
const upload=require('../utils/multer');
const {handleAdminBuyEmail,handleAdminSellEmail,handleContactEmail,handleCustomerBuyEmail,handleCustomerSellEmail, handleResourceFileEmail, handleResourceCustomerEmail}=require('../controllers/mailcontrollers');


mailRouter.post("/customer/buy",handleCustomerBuyEmail);
mailRouter.post("/admin/buy",handleAdminBuyEmail)
mailRouter.post("/customer/sell",handleCustomerSellEmail);
mailRouter.post("/admin/sell",handleAdminSellEmail)
mailRouter.post("/contact",handleContactEmail);
mailRouter.post("/resource/files",upload.single("file"),handleResourceFileEmail)
mailRouter.post("/customer/resource/files",handleResourceCustomerEmail)


module.exports=mailRouter;