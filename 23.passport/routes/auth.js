const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const User = require("../models/User");

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).send("User already exists");
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await User.create({
            username,
            password: hashedPassword
        });

        // Automatically log in after registration
        req.login(user, (err) => {
            if (err) return res.status(500).send("Login failed");

            res.send("Registration successful");
        });

    } catch (error) {
        res.status(500).send(error.message);
    }
});

// LOGIN
router.post(
    "/login",
    passport.authenticate("local", {
        failureMessage: true
    }),
    (req, res) => {
        res.send(`Welcome ${req.user.username}`);
    }
);

// PROTECTED ROUTE
router.get("/dashboard", (req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send("Please login first");
    }

    res.send(`Welcome to dashboard ${req.user.username}`);
});

// LOGOUT
router.post("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);

        res.send("Logged out successfully");
    });
});

module.exports = router;