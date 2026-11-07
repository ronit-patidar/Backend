const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendOTPEmail = async (email, otp) => {
    await transporter.sendMail({
        from: `"Email Verification" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Verify Your Email",

        html: `
            <h2>Email Verification</h2>
            <p>Your OTP is:</p>

            <h1>${otp}</h1>

            <p>This OTP expires in 5 minutes.</p>
        `
    });
};

module.exports = sendOTPEmail;