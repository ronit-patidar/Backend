const nodemailer = require("nodemailer");
const express = require("express");
const app = express();
// 1. Create transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// 2. Send email
async function sendEmail() {
    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "ronitpatidar01@gmail.com",
            subject: "Welcome!",
            text: "Welcome to our application!"
        });

        console.log("Email sent:", info.messageId);

    } catch (error) {
        console.log(error);
    }
}

sendEmail();

app.listen(3000,()=>{
  console.log("Server is running on port 3000");
})