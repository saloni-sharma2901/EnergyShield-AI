import express from "express";
import { analyzeEnergyRisk } from "../services/aiService.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
    try {
        const { news } = req.body;

        if (!news) {
            return res.status(400).json({
                success: false,
                message: "News is required",
            });
        }

        const analysis = await analyzeEnergyRisk(news);

        res.status(200).json({
            success: true,
            analysis,
        });
    } catch (error) {
        console.error("AI Error:", error);

        res.status(500).json({
            success: false,
            message: "AI analysis failed",
        });
    }
});

export default router;