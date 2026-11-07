const express = require("express");
const rateLimit = require("express-rate-limit");

const {
    registerUser,
    verifyOTP
} = require("../controllers/auth.controller");

const router = express.Router();

const otpLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    message: {
        message: "Too many attempts. Please try again later."
    }
});

router.post("/register", otpLimiter, registerUser);

router.post("/verify-otp", otpLimiter, verifyOTP);

module.exports = router;