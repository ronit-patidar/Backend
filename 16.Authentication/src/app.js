const express = require("express");
const authRoutes = require("./routes/auth.routes");
const postRoutes = require("./routes/post.routes");
const cookieParser = require("cookie-parser");

const app = express();
// without this server cant read json data from request body
app.use(express.json());
// without this server cant store anything in cookies
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/posts",postRoutes);
//prefix
module.exports = app;
 