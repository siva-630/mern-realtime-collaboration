import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();
const PORT =5000

const mongo= process.env.MONGO_URI;

const app = express();

app.get("/",(req, res) => {
    res.send("server running")
})

mongoose.connect(mongo)
    .then(() => console.log("mongodb connected"))
    .catch(() => console.log(error));


app.listen(PORT, () => {
        console.log(`server is running at http://localhost:${PORT}`);
        
    })