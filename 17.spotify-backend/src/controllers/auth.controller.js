const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function registerUser(req, res) {
  try {
    const { username, email, password, role = "user" } = req.body;

    // Check if user already exists
    const isUserAlreadyExist = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserAlreadyExist) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    // Hash password
    const hash = await bcrypt.hash(password, 10);

    // Create user with hashed password
    const user = new userModel({
      username,
      email,
      password: hash,
      role,
    });

    // Save user in database
    await user.save();

    // Create JWT token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET
    );

    // Set token in cookie
    res.cookie("token", token);

    // Send response
    res.status(201).json({
      message: "User registered successfully",
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
}

async function loginUser(req, res) {
  const { username,email, password } = req.body;
  const user = await userModel.findOne({ $or: [{ username }, { email }] });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "Login successful",
    user: {
      id:user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    },
  });
}

async function logutUser(req,res){
  res.clearCookie("token");
  res.status(200).json({
    message : "User logged out sucessfully"
  })
}



module.exports = { registerUser, loginUser , logutUser};