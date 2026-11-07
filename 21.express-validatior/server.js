const express = require("express");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.json());

app.post(
    "/register",

    // Validation middleware
    [
        body("name")
            .notEmpty()
            .withMessage("Name is required"),

        body("email")
            .isEmail()
            .withMessage("Enter a valid email"),

        body("password")
            .isLength({ min: 6 })
            .withMessage("Password must be at least 6 characters")
    ],

    // Controller
    (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }

        res.status(201).json({
            message: "User registered successfully"
        });
    }
);

app.listen(3000);