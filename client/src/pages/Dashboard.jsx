import { useEffect, useState } from "react";
import {
    getDashboardData,
    analyzeEnergyRisk,
} from "../services/api";

function Dashboard() {
    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // AI
    const [aiNews, setAiNews] = useState("");
    const [aiResult, setAiResult] = useState("");
    const [aiLoading, setAiLoading] = useState(false);

    const [aiMetrics, setAiMetrics] = useState({
        riskLevel: "",
        riskScore: null,
        confidence: null,
        marketVolatility: "",
    });

    // =========================
    // LOAD DASHBOARD
    // =========================

    useEffect(() => {
        const loadDashboard = async () => {
            try {
                const response = await getDashboardData();

                if (response?.success) {
                    setDashboard(response.data);
                } else {
                    setError(
                        response?.message || "Unable to load dashboard"
                    );
                }
            } catch (err) {
                console.error("Dashboard Error:", err);
                setError("Backend connection failed");
            } finally {
                setLoading(false);
            }
        };

        loadDashboard();
    }, []);

    // =========================
    // AI ANALYSIS
    // =========================

    const handleAIAnalysis = async () => {
        if (!aiNews.trim()) {
            setAiResult(
                "Please enter an energy-related news or event."
            );
            return;
        }

        try {
            setAiLoading(true);
            setAiResult("");

            setAiMetrics({
                riskLevel: "",
                riskScore: null,
                confidence: null,
                marketVolatility: "",
            });

            const response = await analyzeEnergyRisk(
                aiNews.trim()
            );

            console.log("AI RESPONSE:", response);

            if (!response?.success) {
                setAiResult(
                    response?.message || "AI analysis failed."
                );
                return;
            }

            const analysis =
                response.analysis ||
                response.data?.analysis ||
                response.result ||
                "";

            if (!analysis) {
                setAiResult("AI returned an empty response.");
                return;
            }

            setAiResult(analysis);

            // Remove markdown formatting
            const cleanText = analysis
                .replace(/\*\*/g, "")
                .replace(/__/g, "");

            // Risk Level
            const riskMatch = cleanText.match(
                /Risk\s*Level\s*[:\-]?\s*(Low|Medium|High)/i
            );

            // Risk Score
            const scoreMatch = cleanText.match(
                /Risk\s*Score\s*[:\-]?\s*(\d{1,3})\s*(?:\/\s*100)?/i
            );

            // AI Confidence
            const confidenceMatch = cleanText.match(
                /AI\s*Confidence\s*[:\-]?\s*(\d{1,3})\s*(?:\/\s*100)?/i
            );

            // Market Volatility
            const volatilityMatch = cleanText.match(
                /Market\s*Volatility\s*[:\-]?\s*(Low|Medium|High)/i
            );

            const riskLevel = riskMatch
                ? riskMatch[1]
                : "";

            const riskScore = scoreMatch
                ? Number(scoreMatch[1])
                : null;

            const confidence = confidenceMatch
                ? Number(confidenceMatch[1])
                : null;

            const marketVolatility = volatilityMatch
                ? volatilityMatch[1]
                : "";

            setAiMetrics({
                riskLevel,
                riskScore,
                confidence,
                marketVolatility,
            });

        } catch (err) {
            console.error("AI Analysis Error:", err);

            setAiResult(
                "AI analysis failed. Please try again."
            );
        } finally {
            setAiLoading(false);
        }
    };

    // =========================
    // LOGOUT
    // =========================

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        window.location.href = "/login";
    };

    // =========================
    // RISK COLOR
    // =========================

    const getRiskColor = (risk) => {
        if (!risk) return "text-slate-400";

        const value = String(risk).toLowerCase();

        if (value === "high") return "text-red-400";
        if (value === "medium") return "text-orange-400";
        if (value === "low") return "text-green-400";

        return "text-slate-400";
    };

    // =========================
    // DYNAMIC ACTIVE ALERTS
    // =========================

    const getActiveAlerts = () => {
        if (aiMetrics.riskScore !== null) {
            if (aiMetrics.riskScore >= 70) {
                return 12;
            }

            if (aiMetrics.riskScore >= 40) {
                return 7;
            }

            return 2;
        }

        return dashboard?.activeAlerts ?? 0;
    };

    // =========================
    // LOADING
    // =========================

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

                <div className="text-center">

                    <div className="w-12 h-12 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin mx-auto"></div>

                    <p className="text-xl mt-5">
                        Loading Dashboard...
                    </p>

                </div>

            </div>
        );
    }

    // =========================
    // ERROR
    // =========================

    if (error) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

                <div className="text-center">

                    <div className="text-5xl mb-5">
                        ⚠️
                    </div>

                    <h2 className="text-2xl font-bold text-red-400">
                        {error}
                    </h2>

                    <p className="text-slate-400 mt-3">
                        Make sure backend is running on port 5001.
                    </p>

                </div>

            </div>
        );
    }

    // =========================
    // DASHBOARD VALUES
    // =========================

    const globalNews =
        aiMetrics.riskLevel ||
        dashboard?.globalNews ||
        "Stable";

    const supplyChainRisk =
        aiMetrics.riskLevel ||
        dashboard?.supplyChainRisk ||
        "Medium";

    const marketVolatility =
        aiMetrics.marketVolatility ||
        dashboard?.marketVolatility ||
        "Medium";

    const aiConfidence =
        aiMetrics.confidence !== null
            ? aiMetrics.confidence
            : dashboard?.aiConfidence || 0;

    const activeAlerts = getActiveAlerts();

    const marketsMonitored =
        dashboard?.marketsMonitored ?? 0;

    // =========================
    // RISK CARD
    // =========================

    const RiskCard = ({
        title,
        value,
        icon,
        valueColor,
    }) => (
        <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">

            <div className="flex items-center justify-between">

                <p className="text-slate-400 group-hover:text-slate-300 transition">
                    {title}
                </p>

                <span className="text-2xl transition-transform duration-300 group-hover:scale-125">
                    {icon}
                </span>

            </div>

            <h3
                className={`text-3xl font-bold mt-4 transition-all duration-300 group-hover:scale-105 origin-left ${valueColor}`}
            >
                {value}
            </h3>

            <div className="mt-4 h-1 w-0 group-hover:w-full bg-blue-500 rounded-full transition-all duration-500"></div>

        </div>
    );

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* HEADER */}

            <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-800">

                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                    <div className="group cursor-pointer">

                        <h1 className="text-2xl font-bold transition group-hover:text-blue-400">
                            ⚡ EnergyShield AI
                        </h1>

                        <p className="text-slate-400 text-sm mt-1">
                            Energy Intelligence Dashboard
                        </p>

                    </div>

                    <button
                        onClick={handleLogout}
                        className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
                    >
                        Logout
                    </button>

                </div>

            </header>

            {/* MAIN */}

            <main className="max-w-7xl mx-auto px-6 py-10">

                <div className="mb-10">

                    <p className="text-blue-400 font-medium mb-2">
                        REAL-TIME INTELLIGENCE
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Live Risk Dashboard
                    </h2>

                    <p className="text-slate-400 mt-3">
                        Monitor global energy supply chain risks in real time.
                    </p>

                </div>

                {/* MAIN RISK CARDS */}

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <RiskCard
                        title="Global News"
                        value={globalNews}
                        icon="🌍"
                        valueColor={getRiskColor(globalNews)}
                    />

                    <RiskCard
                        title="Supply Chain Risk"
                        value={supplyChainRisk}
                        icon="⛓️"
                        valueColor={getRiskColor(supplyChainRisk)}
                    />

                    <RiskCard
                        title="Market Volatility"
                        value={marketVolatility}
                        icon="📈"
                        valueColor={getRiskColor(marketVolatility)}
                    />

                    <RiskCard
                        title="AI Confidence"
                        value={`${aiConfidence}%`}
                        icon="🤖"
                        valueColor="text-blue-400"
                    />

                </div>

                {/* EXTRA STATS */}

                <div className="grid md:grid-cols-2 gap-6 mt-8">

                    {/* ACTIVE ALERTS */}

                    <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10">

                        <div className="flex justify-between items-center">

                            <p className="text-slate-400">
                                Active Alerts
                            </p>

                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                                🚨
                            </span>

                        </div>

                        <h3 className="text-3xl font-bold text-red-400 mt-4">
                            {activeAlerts}
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                            AI-detected current risk alerts
                        </p>

                    </div>

                    {/* MARKETS */}

                    <div className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">

                        <div className="flex justify-between items-center">

                            <p className="text-slate-400">
                                Markets Monitored
                            </p>

                            <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                                🌐
                            </span>

                        </div>

                        <h3 className="text-3xl font-bold text-blue-400 mt-4">
                            {marketsMonitored}
                        </h3>

                        <p className="text-sm text-slate-500 mt-2">
                            Global energy markets
                        </p>

                    </div>

                </div>

                {/* AI INSIGHT */}

                <div className="group mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5">

                    <div className="flex items-center gap-3">

                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                            🤖
                        </div>

                        <div>

                            <h3 className="text-2xl font-bold">
                                AI Risk Insight
                            </h3>

                            <p className="text-sm text-blue-400">
                                Powered by EnergyShield AI
                            </p>

                        </div>

                    </div>

                    <p className="text-slate-400 mt-6 leading-7">
                        EnergyShield AI continuously evaluates geopolitical
                        events, energy markets and supply chain conditions
                        to identify potential disruptions and emerging risks.
                    </p>

                    {aiMetrics.riskScore !== null && (

                        <div className="mt-6 p-5 bg-slate-800 rounded-xl border border-slate-700">

                            <div className="flex justify-between items-center">

                                <div>

                                    <p className="text-slate-400">
                                        Current AI Risk Score
                                    </p>

                                    <p className="text-3xl font-bold text-blue-400 mt-1">
                                        {aiMetrics.riskScore}/100
                                    </p>

                                </div>

                                <div className="text-right">

                                    <p className="text-slate-400">
                                        Risk Level
                                    </p>

                                    <p
                                        className={`text-xl font-bold ${getRiskColor(
                                            aiMetrics.riskLevel
                                        )}`}
                                    >
                                        {aiMetrics.riskLevel}
                                    </p>

                                </div>

                            </div>

                        </div>

                    )}

                </div>

                {/* AI ANALYZER */}

                <div className="mt-8 bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:border-blue-500/40">

                    <div className="flex items-center gap-3">

                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl">
                            🧠
                        </div>

                        <div>

                            <h3 className="text-2xl font-bold">
                                AI Risk Analyzer
                            </h3>

                            <p className="text-slate-400 mt-1">
                                Analyze energy-related news with AI.
                            </p>

                        </div>

                    </div>

                    <textarea
                        value={aiNews}
                        onChange={(e) => setAiNews(e.target.value)}
                        placeholder="Example: A major conflict has disrupted oil shipments from the Middle East..."
                        className="w-full mt-6 p-4 rounded-xl bg-slate-800 border border-slate-700 text-white min-h-36 outline-none resize-none transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                    />

                    <button
                        onClick={handleAIAnalysis}
                        disabled={aiLoading}
                        className="mt-4 px-7 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {aiLoading
                            ? "🤖 Analyzing..."
                            : "⚡ Analyze Risk"}
                    </button>

                    {/* AI METRICS */}

                    {aiMetrics.riskScore !== null && (

                        <div className="grid md:grid-cols-3 gap-4 mt-6">

                            <div className="group bg-slate-800 rounded-xl p-5 border border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40">

                                <p className="text-slate-400">
                                    Risk Level
                                </p>

                                <p
                                    className={`text-2xl font-bold mt-2 ${getRiskColor(
                                        aiMetrics.riskLevel
                                    )}`}
                                >
                                    {aiMetrics.riskLevel}
                                </p>

                            </div>

                            <div className="group bg-slate-800 rounded-xl p-5 border border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40">

                                <p className="text-slate-400">
                                    Risk Score
                                </p>

                                <p className="text-2xl font-bold text-orange-400 mt-2">
                                    {aiMetrics.riskScore}/100
                                </p>

                            </div>

                            <div className="group bg-slate-800 rounded-xl p-5 border border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40">

                                <p className="text-slate-400">
                                    AI Confidence
                                </p>

                                <p className="text-2xl font-bold text-blue-400 mt-2">
                                    {aiMetrics.confidence}/100
                                </p>

                            </div>

                        </div>

                    )}

                    {/* AI RESULT */}

                    {aiResult && (

                        <div className="mt-6 p-6 rounded-xl bg-slate-800 border border-slate-700 transition-all duration-300 hover:border-blue-500/40">

                            <h4 className="text-xl font-bold text-blue-400">
                                AI Analysis
                            </h4>

                            <p className="text-slate-300 mt-4 whitespace-pre-line leading-7">
                                {aiResult}
                            </p>

                        </div>

                    )}

                </div>

                {/* FOOTER */}

                <div className="text-center text-slate-600 text-sm mt-12 pb-5">
                    ⚡ EnergyShield AI • Intelligent Energy Supply Chain Resilience
                </div>

            </main>

        </div>
    );
}

export default Dashboard;