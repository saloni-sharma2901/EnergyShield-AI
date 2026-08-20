import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

dotenv.config();

const app = express();

// Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

//api routes

app.use("/api/ai", aiRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("EnergyShield AI Backend Running");
});

// Authentication
app.use("/api/auth", authRoutes);

// Dashboard
app.use("/api/dashboard", dashboardRoutes);

// Server
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});