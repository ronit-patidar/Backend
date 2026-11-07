const express = require("express");

const rateLimit = require("express-rate-limit");

const app = express();

// Create rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes

    limit: 5, // Maximum 5 requests

    message: {
        success: false,
        message: "Too many requests. Try again later."
    },

    statusCode: 429
});

// Apply middleware to login API
app.use("/api/login", limiter);

app.post("/api/login", (req, res) => {
    res.json({
        message: "Login API called successfully",
    });
});

app.listen(3000);