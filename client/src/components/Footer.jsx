import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebook,
    FaLinkedin,
    FaGithub,
    FaTwitter,
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-4 gap-10">

                    {/* Logo */}

                    <div>

                        <h2 className="text-3xl font-bold text-white">
                            <span className="text-blue-400">⚡ Energy</span>
                            Shield AI
                        </h2>

                        <p className="text-slate-400 mt-6 leading-7">
                            AI-powered platform for monitoring global energy
                            supply chain disruptions using news analysis,
                            market trends and predictive intelligence.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-semibold text-white mb-6">
                            Quick Links
                        </h3>

                        <ul className="space-y-4">

                            <li>
                                <Link
                                    to="/"
                                    className="text-slate-400 hover:text-blue-400 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="text-slate-400 hover:text-blue-400 transition"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/dashboard"
                                    className="text-slate-400 hover:text-blue-400 transition"
                                >
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/login"
                                    className="text-slate-400 hover:text-blue-400 transition"
                                >
                                    Login
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Services */}

                    <div>

                        <h3 className="text-xl font-semibold text-white mb-6">
                            Services
                        </h3>

                        <ul className="space-y-4 text-slate-400">

                            <li>AI Prediction</li>

                            <li>Risk Analysis</li>

                            <li>Live Monitoring</li>

                            <li>Market Intelligence</li>

                        </ul>

                    </div>

                    {/* Social */}

                    <div>

                        <h3 className="text-xl font-semibold text-white mb-6">
                            Follow Us
                        </h3>

                        <div className="flex gap-5">

                            <a
                                href="#"
                                className="bg-slate-800 p-4 rounded-xl hover:bg-blue-600 transition"
                            >
                                <FaFacebook className="text-white text-xl" />
                            </a>

                            <a
                                href="#"
                                className="bg-slate-800 p-4 rounded-xl hover:bg-sky-500 transition"
                            >
                                <FaTwitter className="text-white text-xl" />
                            </a>

                            <a
                                href="#"
                                className="bg-slate-800 p-4 rounded-xl hover:bg-blue-700 transition"
                            >
                                <FaLinkedin className="text-white text-xl" />
                            </a>

                            <a
                                href="#"
                                className="bg-slate-800 p-4 rounded-xl hover:bg-gray-700 transition"
                            >
                                <FaGithub className="text-white text-xl" />
                            </a>

                        </div>
                    </div>

                </div>

            </div>

            {/* Bottom Footer */}

            <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-slate-400 text-center md:text-left">
                    © 2026 EnergyShield AI. All Rights Reserved.
                </p>

                <div className="flex gap-6">

                    <Link
                        to="/"
                        className="text-slate-400 hover:text-blue-400 transition"
                    >
                        Privacy Policy
                    </Link>

                    <Link
                        to="/"
                        className="text-slate-400 hover:text-blue-400 transition"
                    >
                        Terms of Service
                    </Link>

                    <Link
                        to="/contact"
                        className="text-slate-400 hover:text-blue-400 transition"
                    >
                        Support
                    </Link>

                </div>

            </div>


        </footer>
    );
}

export default Footer;