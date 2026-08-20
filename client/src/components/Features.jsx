import React from "react";
import {
    FaRobot,
    FaGlobe,
    FaChartLine,
    FaShieldAlt,
    FaBell,
    FaBolt,
} from "react-icons/fa";

function Features() {
    const features = [
        {
            icon: <FaRobot className="text-5xl text-blue-400" />,
            title: "AI Prediction",
            desc: "Predict energy supply chain disruptions before they happen using advanced AI."
        },
        {
            icon: <FaGlobe className="text-5xl text-cyan-400" />,
            title: "Global Monitoring",
            desc: "Track worldwide news, geopolitical events and market activities in real time."
        },
        {
            icon: <FaChartLine className="text-5xl text-green-400" />,
            title: "Live Analytics",
            desc: "Interactive dashboards provide real-time insights and trends."
        },
        {
            icon: <FaShieldAlt className="text-5xl text-purple-400" />,
            title: "Risk Assessment",
            desc: "Identify high, medium and low-risk regions with AI confidence scores."
        },
        {
            icon: <FaBell className="text-5xl text-yellow-400" />,
            title: "Instant Alerts",
            desc: "Receive immediate notifications whenever a disruption is detected."
        },
        {
            icon: <FaBolt className="text-5xl text-red-400" />,
            title: "Fast Decisions",
            desc: "Enable organizations to take proactive actions using AI recommendations."
        }
    ];

    return (
        <section className="bg-slate-950 py-24">
            <div className="max-w-7xl mx-auto px-6">

                <div
                    className="text-center mb-16"
                    data-aos="fade-up"
                >
                    <h2 className="text-5xl font-bold text-white">
                        Powerful Features
                    </h2>

                    <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">
                        Everything you need to monitor, predict and protect
                        the energy supply chain with Artificial Intelligence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((feature, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 shadow-xl"
                        >
                            <div className="mb-6">
                                {feature.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white">
                                {feature.title}
                            </h3>

                            <p className="text-slate-400 mt-4 leading-7">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-20 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-10 text-center shadow-2xl"
                    data-aos="fade-up"
                >
                    <h2 className="text-4xl font-bold text-white">
                        Secure Your Energy Supply Chain Today
                    </h2>

                    <p className="text-blue-100 mt-5 text-lg max-w-3xl mx-auto leading-8">
                        EnergyShield AI combines Artificial Intelligence, real-time
                        monitoring, predictive analytics and smart alerts to help
                        organizations stay ahead of disruptions.
                    </p>

                    <button className="mt-8 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
                        Get Started
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Features;