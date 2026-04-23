import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.js";

dotenv.config();

const PORT = 5000;
const mongo = process.env.MONGO_URI;

const app = express();

// 🔥 ADD THIS (MOST IMPORTANT)
app.use(express.json());

// CORS
app.use(cors({
  origin: "http://localhost:5173"
}));

// Routes
app.use("/api/auth", authRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("server running");
});

// MongoDB
mongoose.connect(mongo)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((error) => console.log(error));

// Start server
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});