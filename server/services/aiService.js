import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

const analyzeEnergyRisk = async (newsText) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            throw new Error("GEMINI_API_KEY is missing");
        }

        const ai = new GoogleGenAI({
            apiKey: apiKey,
        });

        const prompt = `
You are an energy supply chain risk analyst for EnergyShield AI.

Analyze this news/event:

${newsText}

Give:
1. Risk Level: Low, Medium, or High
2. Risk Score: 0-100
3. AI Confidence: 0-100
4. Short explanation
5. Possible impact on energy supply chain
6. Recommended action

Keep the answer concise.
`;

        const response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: prompt,
        });

        return response.text;
    } catch (error) {
        console.error("🔥 GEMINI ACTUAL ERROR:", error);
        throw error;
    }
};

export default analyzeEnergyRisk;
export { analyzeEnergyRisk };
