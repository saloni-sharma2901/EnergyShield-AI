import React from "react";

function Statistics() {
    const stats = [
        {
            number: "120+",
            title: "Global News Sources",
            desc: "AI continuously monitors trusted news platforms worldwide."
        },
        {
            number: "98%",
            title: "Prediction Accuracy",
            desc: "Advanced AI models provide highly accurate disruption forecasts."
        },
        {
            number: "24/7",
            title: "Real-Time Monitoring",
            desc: "Track energy supply chain events every second."
        },
        {
            number: "50+",
            title: "Countries Covered",
            desc: "Monitor geopolitical and market events across the globe."
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
                        Trusted AI Statistics
                    </h2>

                    <p className="text-slate-400 mt-6 text-lg max-w-3xl mx-auto">
                        EnergyShield AI delivers real-time insights,
                        predictive intelligence and global monitoring
                        for smarter energy supply chain decisions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {stats.map((item, index) => (
                        <div
                            key={index}
                            data-aos="zoom-in"
                            className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500 transition duration-300 shadow-xl"
                        >
                            <h3 className="text-5xl font-bold text-blue-400">
                                {item.number}
                            </h3>

                            <h4 className="text-white text-xl font-semibold mt-6">
                                {item.title}
                            </h4>

                            <p className="text-slate-400 mt-4 leading-7">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div
                    className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-center shadow-2xl"
                    data-aos="fade-up"
                >
                    <h2 className="text-4xl font-bold text-white">
                        Smarter Decisions with AI
                    </h2>

                    <p className="text-blue-100 mt-5 max-w-2xl mx-auto text-lg">
                        Our AI analyzes global news, geopolitical events, and market
                        trends to predict disruptions before they impact the energy
                        supply chain.
                    </p>

                    <button className="mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:scale-105 transition duration-300 shadow-lg">
                        Explore Dashboard
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Statistics;