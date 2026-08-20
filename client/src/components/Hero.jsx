import { Link } from "react-router-dom";

function Hero() {
    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"
            data-aos="fade-up"
        >
            {/* Background Blur */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-14 items-center">

                {/* Left Content */}
                <div>

                    <p className="inline-block px-5 py-2 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium mb-6">
                        🚀 AI-Powered Energy Intelligence
                    </p>

                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-white">
                        Protect India's
                        <br />
                        <span className="text-blue-400">
                            Energy Supply Chain
                        </span>
                    </h1>

                    <p className="mt-8 text-slate-300 text-lg md:text-xl leading-8">
                        EnergyShield AI monitors global news,
                        geopolitical events and market trends
                        to predict disruptions before they happen,
                        helping organizations make smarter decisions.
                    </p>

                    <div className="flex flex-wrap gap-5 mt-10">

                        <Link
                            to="/dashboard"
                            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-white font-semibold transition duration-300 shadow-xl"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/about"
                            className="border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-xl text-white transition duration-300"
                        >
                            Learn More
                        </Link>

                    </div>

                    <div className="grid grid-cols-3 gap-6 mt-14">

                        <div>
                            <h2 className="text-3xl font-bold text-blue-400">
                                120+
                            </h2>
                            <p className="text-slate-400 mt-2">
                                News Sources
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-blue-400">
                                98%
                            </h2>
                            <p className="text-slate-400 mt-2">
                                Prediction Accuracy
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-blue-400">
                                24/7
                            </h2>
                            <p className="text-slate-400 mt-2">
                                Live Monitoring
                            </p>
                        </div>

                    </div>

                </div>
                {/* Right Side */}
                <div
                    className="relative flex justify-center"
                    data-aos="zoom-in"
                >
                    <div className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-xl shadow-2xl p-8">

                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-white">
                                Live Risk Dashboard
                            </h3>

                            <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                                ● Live
                            </span>
                        </div>

                        <div className="space-y-5">

                            <div className="rounded-xl bg-slate-800 p-5">
                                <div className="flex justify-between">
                                    <span className="text-slate-300">
                                        Global News
                                    </span>

                                    <span className="text-green-400 font-semibold">
                                        Stable
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-xl bg-slate-800 p-5">
                                <div className="flex justify-between">
                                    <span className="text-slate-300">
                                        Supply Chain Risk
                                    </span>

                                    <span className="text-yellow-400 font-semibold">
                                        Medium
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-xl bg-slate-800 p-5">
                                <div className="flex justify-between">
                                    <span className="text-slate-300">
                                        Market Volatility
                                    </span>

                                    <span className="text-red-400 font-semibold">
                                        High
                                    </span>
                                </div>
                            </div>

                            <div className="rounded-xl bg-blue-600 p-6 text-center mt-8 shadow-xl">
                                <h2 className="text-5xl font-bold text-white">
                                    87%
                                </h2>

                                <p className="text-blue-100 mt-2">
                                    AI Confidence Score
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;