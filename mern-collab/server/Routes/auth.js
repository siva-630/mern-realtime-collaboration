import express from "express";
import User from "../models/User.js";

const router = express.Router();


// 🔹 REGISTER ROUTE
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists ❌" });
    }

    // create new user
    const newUser = new User({
      name,
      email,
      password
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully ✅" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});


// 🔹 LOGIN ROUTE
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found ❌" });
    }

    // check password
    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password ❌" });
    }

    res.json({ message: "Login successful ✅", user });

  } catch (error) {
    console.log("ERROR 👉", error);   // 🔥 ADD THIS
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;