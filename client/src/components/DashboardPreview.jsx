import { useEffect, useState } from "react";

function Dashboard() {
    const [backendStatus, setBackendStatus] = useState("Checking...");
    const [error, setError] = useState("");

    useEffect(() => {
        const checkBackend = async () => {
            try {
                const response = await fetch("http://localhost:5001/");

                if (!response.ok) {
                    throw new Error("Backend connection failed");
                }

                const data = await response.text();

                setBackendStatus(data);
            } catch (err) {
                console.error(err);
                setError("Backend is not connected");
            }
        };

        checkBackend();
    }, []);

    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Header */}
            <header className="border-b border-slate-800 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                    <div>
                        <h1 className="text-2xl font-bold">
                            <span className="text-blue-400">⚡ Energy</span>
                            Shield AI
                        </h1>

                        <p className="text-slate-400 text-sm mt-1">
                            Energy Intelligence Dashboard
                        </p>
                    </div>

                    <button
                        onClick={() => {
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                            window.location.href = "/login";
                        }}
                        className="px-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
                    >
                        Logout
                    </button>

                </div>
            </header>

            {/* Main */}
            <main className="max-w-7xl mx-auto px-6 py-10">

                {/* Welcome */}
                <div className="mb-10">
                    <h2 className="text-4xl font-bold">
                        Welcome to EnergyShield AI 👋
                    </h2>

                    <p className="text-slate-400 mt-3">
                        Monitor energy risks, supply chain disruptions and
                        AI-powered insights from one place.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <p className="text-slate-400">
                            Global Risk
                        </p>

                        <h3 className="text-3xl font-bold text-orange-400 mt-3">
                            Medium
                        </h3>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <p className="text-slate-400">
                            Active Alerts
                        </p>

                        <h3 className="text-3xl font-bold text-red-400 mt-3">
                            12
                        </h3>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <p className="text-slate-400">
                            AI Confidence
                        </p>

                        <h3 className="text-3xl font-bold text-green-400 mt-3">
                            98%
                        </h3>
                    </div>

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                        <p className="text-slate-400">
                            Markets Monitored
                        </p>

                        <h3 className="text-3xl font-bold text-blue-400 mt-3">
                            24
                        </h3>
                    </div>

                </div>

                {/* Backend Status */}
                <div className="mt-10 bg-slate-900 border border-slate-800 rounded-2xl p-8">

                    <h3 className="text-2xl font-bold mb-4">
                        System Status
                    </h3>

                    {error ? (
                        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
                            <p className="text-red-400">
                                ❌ {error}
                            </p>

                            <p className="text-slate-400 text-sm mt-2">
                                Make sure the backend server is running on port 5001.
                            </p>
                        </div>
                    ) : (
                        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                            <p className="text-green-400 font-semibold">
                                ✅ Backend Connected
                            </p>

                            <p className="text-slate-400 text-sm mt-2">
                                {backendStatus}
                            </p>
                        </div>
                    )}

                </div>

                {/* Risk Overview */}
                <div className="grid lg:grid-cols-2 gap-8 mt-10">

                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">

                        <h3 className="text-2xl font-bold">
                            Supply Chain Risk
                        </h3>

                        <div className="mt-8 space-y-6">

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-300">
                                        Middle East
                                    </span>

                                    <span className="text-orange-400">
                                        72%
                                    </span>
                                </div>

                                <div className="w-full h-3 bg-slate-800 rounded-full">
                                    <div className="h-3 w-[72%] bg-orange-500 rounded-full"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-300">
                                        Europe
                                    </span>

                                    <span className="text-yellow-400">
                                        54%
                                    </span>
                                </div>

                                <div className="w-full h-3 bg-slate-800 rounded-full">
                                    <div className="h-3 w-[54%] bg-yellow-500 rounded-full"></div>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-slate-300">
                                        Asia
                                    </span>

                                    <span className="text-green-400">
                                        32%
                                    </span>
                                </div>

                                <div className="w-full h-3 bg-slate-800 rounded-full">
                                    <div className="h-3 w-[32%] bg-green-500 rounded-full"></div>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* AI Insight */}

                    <div className="bg-gradient-to-br from-blue-900 to-slate-900 border border-blue-800 rounded-2xl p-8">

                        <h3 className="text-2xl font-bold">
                            🤖 AI Insight
                        </h3>

                        <p className="text-blue-100 mt-6 leading-7">
                            EnergyShield AI is currently monitoring global energy
                            markets and supply chain conditions. The current risk
                            level is moderate, with increased activity detected in
                            the Middle East region.
                        </p>

                        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
                            View AI Analysis
                        </button>

                    </div>

                </div>

            </main>

        </div>
    );
}

export default Dashboard;