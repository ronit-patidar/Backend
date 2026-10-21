
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// 1. Configure cookie-parser with a secret
app.use(cookieParser("my-secret-key"));

// 2. Send a signed cookie
app.get("/login", (req, res) => {
    res.cookie("username", "ronit", {
        signed: true,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 1000
    });

    res.send("Signed cookie created!");
});

// 3. Read and verify the signed cookie
app.get("/profile", (req, res) => {
    const username = req.signedCookies.username;

    if (username === false || username === undefined) {
        return res.status(401).send(
            "Cookie is invalid or missing"
        );
    }

    res.send(`Welcome, ${username}`);
});

// 4. Clear the cookie
app.get("/logout", (req, res) => {
    res.clearCookie("username", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });

    res.send("Cookie cleared!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// if anyone tried to modify the signed cookie without the secret key brower rejects it.


// httpOnly: true prevents ordinary client-side JavaScript from reading the cookie.



// secure: true restricts the cookie to HTTPS. For local HTTP development, the example disables it.



// sameSite: "lax" helps restrict certain cross-site cookie requests.



// maxAge sets the cookie lifetime in milliseconds. Here it is one hour.