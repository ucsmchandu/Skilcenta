const sendMail = require("../utils/sendMail");
// for ordering
const handleCustomerBuyEmail = async (req, res) => {
    try {
        const { email, name, productName, cost, description } = req.body;
        //to customer
        await sendMail({
            to: email,
            subject: "Order confirmation from Skilcenta",
            html: `
           <h2>🧾 Thank you for your purchase!</h2>

<p>Dear ${name},</p>

<p>We’ve received your order for the product <strong>${productName}</strong> priced at <strong>₹${cost}</strong>.</p>

<p><strong>Product Description:</strong> ${description}</p>

<p>We appreciate your trust in <strong>Skilcenta</strong>. For any questions, feel free to contact us at  
<a href="mailto:skilcenta.contact@gmail.com">skilcenta.contact@gmail.com</a>.</p>

<p>Regards,<br>Skilcenta Team</p>

            `,
        });
        res.status(200).json({ message: "mails sent" });
    } catch (err) {
        console.log(err);
        console.log(err.message);
        res.status(500).json({ message: "mail Sending failed", error: err.message });
    }
};


const handleAdminBuyEmail = async (req, res) => {
    try {
        //data from the frontend user
        const { productName, buyerAddress, buyerPhone, price, productId } =
            req.body;
        await sendMail({
            to: "skilcenta.orders@gmail.com",
            subject: "New order Placed",
            html: `
           <h2>📦 New Order Notification</h2>

<p><strong>Product:</strong> ${productName}</p>
<p><strong>Price:</strong> ₹${price}</p>
<p><strong>Buyer Phone:</strong> ${buyerPhone}</p>
<p><strong>Buyer Address:</strong> ${buyerAddress}</p>
<p><strong>Product ID:</strong> ${productId}</p>

<hr>
<p>Please log in to the dashboard to process and update the order status.</p>

<p>Regards,<br>Skilcenta Team</p>

           `,
        });
        res.status(200).json({ message: "mail sent" });
    } catch (err) {
        console.log(err);
        console.log(err.message);
        res
            .status(500)
            .json({ message: "mail sending failed", error: err.message });
    }
};

//for selling mail
const handleCustomerSellEmail = async (req, res) => {
    try {
        const {
            productName,
            name,
            email,
            phone,
            address,
            college,
            price,
            description,
            image,
        } = req.body;
        //for customer
        await sendMail({
            to: email,
            subject: "Your Product Listing is Under Review",
            html: `
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
                `,
        });
        res.status(200).json({ message: "mails are sent" });
    } catch (err) {
        console.log(err);
        console.log(err.message);
        res
            .status(500)
            .json({ message: "mail sending failed", error: err.message });
    }
};

const handleAdminSellEmail = async (req, res) => {
    try {
        //data frm the frontend
        const {
            productName,
            name,
            email,
            phone,
            address,
            college,
            price,
            description,
            image,
        } = req.body;
        await sendMail({
            to: "skilcenta.sell@gmail.com",
            subject: `New Product Submitted for Review – ${productName}`,
            html: `
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

                `,
        });
        res.status(200).json({ message: "mail sent" });
    } catch (err) {
        console.log(err);
        console.log(err.message);
        res
            .status(500)
            .json({ message: "mailed sent failed :", error: err.message });
    }
};

// for contact
const handleContactEmail = async (req, res) => {
    try {
        const { name, email, message } = req.body;
        await sendMail({
            to: "skilcenta.contact@gmail.com",
            subject: `New Contact Form Submission from ${name}`,
            html: `
            <h2>📩 New Contact Message Received</h2>

<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>

<p><strong>Message:</strong></p>
<p>${message}</p>

<hr>
<p>Please respond to this message as soon as possible.</p>

<p>Regards,<br>Skilcenta Contact System</p>
            `,
        });
        res.status(200).json({ message: "mail sent" });
    } catch (err) {
        console.log(err);
        console.log(err.message);
        res
            .status(500)
            .json({ message: "mail sending failed", error: err.message });
    }
};

// for uploading the resource files
const handleResourceFileEmail = async (req, res) => {
    try {
        const {
            id,
            author,
            email,
            branch,
            year,
            sem,
            title,
            category,
            description,
        } = req.body;
        if (!req.file) return res.status(400).json({ message: "no file found" });
        // console.log(req.file);
        // console.log(req.body);
        await sendMail({
            to: "skilcenta.sell@gmail.com",
            subject: `New Resources Submitted for Review - ${title}`,
            html: `
        <h2>📥 New Resource Submission Alert</h2>

<p><strong>User ID:</strong> ${id}</p>
<p><strong>Author:</strong> ${author}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Branch:</strong> ${branch}</p>
<p><strong>Year:</strong> ${year}</p>
<p><strong>Semester:</strong> ${sem}</p>
<p><strong>Title:</strong> ${title}</p>
<p><strong>Category:</strong> ${category}</p>
<p><strong>File link:</strong> ${req.file.path}</p>
<p><strong>Description:</strong></p>
<p>${description}</p>

<hr>

<p><strong>File Link:</strong> <a href="${req.file.path}" target="_blank">${req.file.path}</a></p>

<p><strong>Preview:</strong></p>
<iframe src="${req.file.path}" width="600" height="400" style="border: 1px solid #ccc; border-radius: 6px;"></iframe>

<hr>

<p>Please log in to the admin panel to review and approve the resource.</p>

<p>Regards,<br>Automated Notification – Skilcenta</p>
        `,
        });
        res.status(200).json({ message: "mail sent" });
    } catch (err) {
        console.log(err);
        console.log(err.message);
        res
            .status(500)
            .json({ message: "mail sending failed", error: err.message });
    }
};

const handleResourceCustomerEmail = async (req, res) => {
    try {
        const {
            id,
            author,
            email,
            branch,
            year,
            sem,
            title,
            category,
            description,
        } = req.body;
        // console.log("cust:",req.body);
        await sendMail({
            to: email,
            subject: "Your Resource Listing is Under Review",
            html: `
        <h2>✅ Resource Submission Received</h2>

<p>Hi <strong>${author}</strong>,</p>
<p>Thank you for submitting your resource to <strong>Skilcenta</strong>. Here’s a summary of what you submitted:</p>

<hr>

<p><strong>Your ID:</strong> ${id}</p>
<p><strong>Branch:</strong> ${branch}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Year:</strong> ${year}</p>
<p><strong>Semester:</strong> ${sem}</p>
<p><strong>Title:</strong> ${title}</p>
<p><strong>Category:</strong> ${category}</p>
<p><strong>Description:</strong></p>
<p>${description}</p>

<hr>
<hr>

<p>Our team will review your submission shortly. You’ll be notified once it’s approved and made available to other students.</p>

<p>Regards,<br>Team Skilcenta</p>
        `,
        });
        res.status(200).json({ message: "mails sent" });
    } catch (err) {
        console.log(err);
        console.log(err.message);
        res.status(500).json({ message: "mail sent failed", error: err.message });
    }
};

const handleResourceLiveEmail = async (req, res) => {
    try {
        const {
            id,
            author,
            email,
            branch,
            year,
            sem,
            title,
            category,
            description,
        } = req.body;
        // console.log("cust:", req.body);

        await sendMail({
            to: email,
            subject: "🎉 Your Resource Submission Has Been Approved – Skilcenta",
            html: `
    <h2>🎉 Resource Submission Approved</h2>

    <p>Hi <strong>${author}</strong>,</p>
    <p>We’re excited to let you know that your resource submission to <strong>Skilcenta</strong> has been <strong>approved</strong>! 
    It is now available for other students to view and benefit from.</p>

    <hr>

    <p><strong>Your ID:</strong> ${id}</p>
    <p><strong>Branch:</strong> ${branch}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Year:</strong> ${year}</p>
    <p><strong>Semester:</strong> ${sem}</p>
    <p><strong>Title:</strong> ${title}</p>
    <p><strong>Category:</strong> ${category}</p>
    <p><strong>Description:</strong></p>
    <p>${description}</p>

    <hr>
    <p><a href="https://skilcenta.vercel.app">Skilcenta website</a></p>
    <p>You can now share the link with your friends or classmates so they can access your resource.</p>

    <p>Thank you for contributing to the Skilcenta community and helping students like you succeed.</p>

    <p>Best regards,<br>Team Skilcenta</p>
    `,
        });
        res.status(200).json({ message: "mail sent" });
    } catch (err) {
        console.log(err);
        console.log(err.message);
        res.status(500).json({ message: "mail sent failed", error: err.message });
    }
};

module.exports = {
    handleAdminBuyEmail,
    handleAdminSellEmail,
    handleCustomerBuyEmail,
    handleCustomerSellEmail,
    handleContactEmail,
    handleResourceFileEmail,
    handleResourceCustomerEmail,
    handleResourceLiveEmail,
};
