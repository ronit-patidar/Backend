require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/auth.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Start server after connecting database
const startServer = async () => {
    try {
        await connectDB();

        app.listen(process.env.PORT || 3000, () => {
            console.log(
                `Server running on port ${process.env.PORT || 3000}`
            );
        });

    } catch (error) {
        console.error("Server startup failed:", error);
        process.exit(1);
    }
};

startServer();