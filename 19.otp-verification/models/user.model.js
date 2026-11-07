const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    password: {
        type: String,
        required: true
    },

    isVerified: {
        type: Boolean,
        default: false
    },

    otpHash: {
        type: String
    },

    otpExpiresAt: {
        type: Date
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;