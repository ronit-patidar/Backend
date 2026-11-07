const User = require("../models/user.model");
const bcrypt = require("bcrypt");

const generateOTP = require("../utils/generateOTP");
const sendOTPEmail = require("../services/email.service");

// REGISTER USER
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Validate input
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        if (password.length < 8) {
            return res.status(400).json({
                message: "Password must contain at least 8 characters"
            });
        }

        const normalizedEmail = email.trim().toLowerCase();

        // 2. Check whether user already exists
        const existingUser = await User.findOne({
            email: normalizedEmail
        });

        if (existingUser) {
            return res.status(409).json({
                message: "Email already registered"
            });
        }

        // 3. Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        // 4. Generate OTP
        const otp = generateOTP();

        // 5. Hash OTP
        const otpHash = await bcrypt.hash(otp, 10);

        // 6. Calculate OTP expiry
        const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);

        // 7. Create user
        const user = await User.create({
            name,
            email: normalizedEmail,
            password: hashedPassword,
            otpHash,
            otpExpiresAt
        });

        // 8. Send OTP email
        try {
            await sendOTPEmail(normalizedEmail, otp);
        } catch (emailError) {
            // Remove unverified account if email delivery fails
            await User.deleteOne({ _id: user._id });

            throw new Error("Unable to send verification email");
        }

        // 9. Send response
        return res.status(201).json({
            success: true,
            message: "Registration successful. Please verify your email."
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Registration failed"
        });
    }
};


// VERIFY OTP
const verifyOTP = async (req, res) => {
    try {
        const { email, otp } = req.body;

        if (!email || !otp || !/^\d{6}$/.test(otp)) {
            return res.status(400).json({
                message: "Valid email and 6-digit OTP are required"
            });
        }

        // 1. Find user
        const user = await User.findOne({
            email: email.trim().toLowerCase()
        });

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.isVerified) {
            return res.status(400).json({
                message: "Email is already verified"
            });
        }

        // 2. Check OTP existence
        if (!user.otpHash || !user.otpExpiresAt) {
            return res.status(400).json({
                message: "No active OTP. Please register again."
            });
        }

        // 3. Check expiry
        if (user.otpExpiresAt.getTime() < Date.now()) {
            return res.status(400).json({
                message: "OTP has expired"
            });
        }

        // 4. Compare OTP with hashed OTP
        const isMatch = await bcrypt.compare(otp, user.otpHash);

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid OTP"
            });
        }

        // 5. Verify user
        user.isVerified = true;

        // 6. Remove OTP after successful verification
        user.otpHash = undefined;
        user.otpExpiresAt = undefined;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "Email verified successfully!"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "OTP verification failed"
        });
    }
};

module.exports = {
    registerUser,
    verifyOTP
};