const express=require('express');

const sendMail=(req,res)=>{
    res.send("mail sent");
}


module.exports={sendMail};