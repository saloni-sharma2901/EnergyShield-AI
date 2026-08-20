import { FaRobot, FaGlobe, FaChartLine, FaBell } from "react-icons/fa";

function About() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            {/* Hero Section */}
            <section className="py-20 px-6 text-center">
                <h1 className="text-5xl font-bold text-blue-400">
                    About EnergyShield AI
                </h1>

                <p className="max-w-3xl mx-auto mt-6 text-lg text-slate-300">
                    EnergyShield AI is an AI-powered platform designed to predict
                    energy supply chain disruptions by analyzing global news,
                    geopolitical events, and market trends. It helps organizations
                    make smarter and faster decisions.
                </p>
            </section>

            {/* Mission */}
            <section className="max-w-6xl mx-auto px-6 py-10">
                <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-lg">
                    <h2 className="text-3xl font-bold text-blue-400 mb-4">
                        Our Mission
                    </h2>

                    <p className="text-slate-300 text-lg">
                        To improve global energy supply chain resilience using Artificial
                        Intelligence, real-time monitoring, and predictive analytics.
                    </p>
                </div>
            </section>

            {/* Features */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Why Choose EnergyShield AI?
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 transition">
                        <FaRobot className="text-5xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            AI Prediction
                        </h3>
                        <p className="text-slate-400">
                            Predict future supply chain risks using AI.
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 transition">
                        <FaGlobe className="text-5xl text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            Global Monitoring
                        </h3>
                        <p className="text-slate-400">
                            Track worldwide geopolitical events in real time.
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 transition">
                        <FaChartLine className="text-5xl text-purple-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            Smart Dashboard
                        </h3>
                        <p className="text-slate-400">
                            View analytics, KPIs and AI predictions in one place.
                        </p>
                    </div>

                    <div className="bg-slate-900 rounded-xl p-6 text-center hover:scale-105 transition">
                        <FaBell className="text-5xl text-red-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">
                            Instant Alerts
                        </h3>
                        <p className="text-slate-400">
                            Receive notifications whenever critical risks are detected.
                        </p>
                    </div>

                </div>
            </section>

            {/* Technology Stack */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Technology Stack
                </h2>

                <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

                    <div className="bg-slate-900 rounded-xl p-5 text-center font-semibold">
                        React.js
                    </div>

                    <div className="bg-slate-900 rounded-xl p-5 text-center font-semibold">
                        Node.js
                    </div>

                    <div className="bg-slate-900 rounded-xl p-5 text-center font-semibold">
                        Express.js
                    </div>

                    <div className="bg-slate-900 rounded-xl p-5 text-center font-semibold">
                        MongoDB
                    </div>

                    <div className="bg-slate-900 rounded-xl p-5 text-center font-semibold">
                        AI Integration
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="text-center py-20">
                <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold transition">
                    Explore Dashboard
                </button>
            </section>

        </div>
    );
}

export default About;