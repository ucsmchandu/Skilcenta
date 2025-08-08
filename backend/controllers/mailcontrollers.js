const sendMail=require('../utils.js/sendMail')
const handleCustomerBuyEmail=async (req,res)=>{
    try{
        const {email,name,productName,cost,description}=req.body;
        //to customer
        await sendMail({
            to:email,
            subject:"Order confirmation from Skilcenta",
            html:`
           <h2>🧾 Thank you for your purchase!</h2>

<p>Dear ${name},</p>

<p>We’ve received your order for the product <strong>${productName}</strong> priced at <strong>₹${cost}</strong>.</p>

<p><strong>Product Description:</strong> ${description}</p>

<p>We appreciate your trust in <strong>Skilcenta</strong>. For any questions, feel free to contact us at  
<a href="mailto:skilcenta.contact@gmail.com">skilcenta.contact@gmail.com</a>.</p>

<p>Regards,<br>Skilcenta Team</p>

            `
        });
        res.status(200).json({message:"mails sent"});
    }catch(err){
        console.log(err);
        console.log(err.message);
        res.status(500).json({message:"mail Sending failed",error:err.message});
    }
    
}

const handleAdminBuyEmail=async(req,res)=>{
    try{
        //data from the frontend user
        const {productName,buyerAddress,buyerPhone,price,productId}=req.body;
         await sendMail({
            to:"skilcenta.orders@gmail.com",
            subject:"New order Placed",
           html:`
           <h2>📦 New Order Notification</h2>

<p><strong>Product:</strong> ${productName}</p>
<p><strong>Price:</strong> ₹${price}</p>
<p><strong>Buyer Phone:</strong> ${buyerPhone}</p>
<p><strong>Buyer Address:</strong> ${buyerAddress}</p>
<p><strong>Product ID:</strong> ${productId}</p>

<hr>
<p>Please log in to the dashboard to process and update the order status.</p>

<p>Regards,<br>Skilcenta Team</p>

           `
        });
        res.status(200).json({message:"mail sent"});
    }catch(err){
        console.log(err);
        console.log(err.message);
        res.status(500).json({message:"mail sending failed",error:err.message});
    }
}

//for selling mail
const handleCustomerSellEmail=async (req,res)=>{
    try{
          const {productName,name,email,phone,address,college,price,description,image}=req.body;
          //for customer
            await sendMail({
                to:email,
                subject:"Your Product Listing is Under Review",
                html:`
                <h2>🛍️ Thank you for listing your product!</h2>

<p>Dear ${name},</p>

<p>We’ve received your product listing for <strong>${productName}</strong>.</p>

<p><strong>Product Details:</strong></p>
<ul>
  <li><strong>Price:</strong> ₹${price}</li>
  <li><strong>Description:</strong> ${description}</li>
  <li><strong>College:</strong> ${college}</li>
  <li><strong>Contact Email:</strong> <a href="mailto:${email}">${email}</a></li>
  <li><strong>Phone:</strong> ${phone}</li>
  <li><strong>Address:</strong> ${address}</li>
  <li><strong>Img Link:</strong> ${image}</li>
</ul>

<p><strong>Product Image:</strong></p>
<img src="${image}" alt="Product Image" width="300" style="border-radius: 8px; border: 1px solid #ccc;" />

<p>Our team is currently reviewing your submission to ensure it meets our platform’s quality and safety guidelines.</p>

<p>You’ll be notified once your product is approved and live on the Skilcenta marketplace.</p>

<hr>
<p>If you have any questions, feel free to reach out to us at 
<a href="mailto:skilcenta.contact@gmail.com">skilcenta.contact@gmail.com</a>.</p>

<p>Regards,<br>Skilcenta Team</p>
                `
            })
            res.status(200).json({message:"mails are sent"});
    }catch(err){
        console.log(err);
        console.log(err.message);
        res.status(500).json({message:"mail sending failed",error:err.message});
    }
}

const handleAdminSellEmail=async(req,res)=>{
    try{
        //data frm the frontend
        const {productName,name,email,phone,address,college,price,description,image}=req.body;
         await sendMail({
                to:"skilcenta.sell@gmail.com",
                subject:`New Product Submitted for Review – ${productName}`,
                html:`
               <h2>📥 New Product Submission Alert</h2>

<p><strong>Seller Name:</strong> ${name}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Address:</strong> ${address}</p>
<p><strong>College:</strong> ${college}</p>
<p><strong>Img Link:</strong>${image}</p>
<hr>

<p><strong>Product Name:</strong> ${productName}</p>
<p><strong>Price:</strong> ₹${price}</p>
<p><strong>Description:</strong></p>
<p>${description}</p>

<p><strong>Image:</strong></p>
<img src="${image}" alt="Product Image" width="300" style="border: 1px solid #ccc; border-radius: 6px;" />

<hr>

<p>Please log in to the admin panel to review and approve the listing.</p>

<p>Regards,<br>Automated Notification – Skilcenta</p>

                `
            })
            res.status(200).json({message:"mail sent"});
    }catch(err){
        console.log(err);
        console.log(err.message);
        res.status(500).json({message:"mailed sent failed :",error:err.message});
    }
}

const handleContactEmail=async(req,res)=>{
    try{
         const {customerEmail,productName,customerName}=req.body;
         await sendMail({
            to:"skilcenta.contact@gmail.com",
            subject:`New Contact Form Submission from ${customerName}`,
            html:`
            <h2>📩 New Contact Message Received</h2>

<p><strong>Name:</strong> ${customerName}</p>
<p><strong>Email:</strong> <a href="mailto:${customerEmail}">${customerEmail}</a></p>
<p><strong>Subject:</strong> [Subject]</p>

<p><strong>Message:</strong></p>
<p>[User Message]</p>

<hr>
<p>Please respond to this message as soon as possible.</p>

<p>Regards,<br>Skilcenta Contact System</p>
            `
         })
         res.status(200).json({message:"mail sent"});
    }catch(err){
        console.log(err);
        console.log(err.message);
        res.status(500).json({message:"mail sending failed",error:err.message})
    }
}


module.exports={
    handleAdminBuyEmail,
    handleAdminSellEmail,
    handleCustomerBuyEmail,
    handleCustomerSellEmail,
    handleContactEmail
}