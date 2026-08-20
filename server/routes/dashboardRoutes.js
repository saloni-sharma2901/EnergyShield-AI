import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            globalNews: "Stable",
            supplyChainRisk: "Medium",
            marketVolatility: "High",
            aiConfidence: 87,
            activeAlerts: 12,
            marketsMonitored: 24,
        },
    })
});

export default router;