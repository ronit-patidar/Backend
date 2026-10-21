const express = require("express");

const router = express.Router();

const { registerUser,loginUser,logutUser } = require("../controllers/auth.controller");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/logout",logutUser);



module.exports = router;