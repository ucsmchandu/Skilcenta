const express=require('express')
const mailRouter=express.Router();
const upload=require('../utils/multer');
const {handleAdminBuyEmail,handleAdminSellEmail,handleContactEmail,handleCustomerBuyEmail,handleCustomerSellEmail, handleResourceFileEmail, handleResourceCustomerEmail, handleResourceLiveEmail}=require('../controllers/mailcontrollers');


mailRouter.post("/customer/buy",handleCustomerBuyEmail); //product buying email api to customer
mailRouter.post("/admin/buy",handleAdminBuyEmail) //product buying email api to admin
mailRouter.post("/customer/sell",handleCustomerSellEmail);// api send after customer selling the product to customer
mailRouter.post("/admin/sell",handleAdminSellEmail)// api to send email about the selling product to the admin
mailRouter.post("/contact",handleContactEmail); // for contcat details
//these apis are for the resource sharing
mailRouter.post("/resource/files",upload.single("file"),handleResourceFileEmail)//used the multer to get the url for the pdf,this sends the mail to admin contains the url of the file
mailRouter.post("/customer/resource/files",handleResourceCustomerEmail);//to send mail to the customer after submitted the rsource details
mailRouter.post("/resource/live",handleResourceLiveEmail); //mail to send after the resource is live on website


module.exports=mailRouter;