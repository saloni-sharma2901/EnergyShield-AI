import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800 shadow-lg">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-3xl font-extrabold tracking-wide"
                >
                    <span className="text-blue-400">⚡ Energy</span>
                    <span className="text-white">Shield AI</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">

                    <Link
                        to="/"
                        className="text-slate-300 hover:text-blue-400 transition-all duration-300"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="text-slate-300 hover:text-blue-400 transition-all duration-300"
                    >
                        About
                    </Link>

                    <Link
                        to="/dashboard"
                        className="text-slate-300 hover:text-blue-400 transition-all duration-300"
                    >
                        Dashboard
                    </Link>

                    <Link
                        to="/login"
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 rounded-xl text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                        Login
                    </Link>

                </div>

                {/* Mobile Button */}

                <button
                    className="text-white text-2xl md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800">
                    <div className="flex flex-col px-8 py-6 space-y-5">

                        <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="text-slate-300 hover:text-blue-400 transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className="text-slate-300 hover:text-blue-400 transition"
                        >
                            About
                        </Link>

                        <Link
                            to="/dashboard"
                            onClick={() => setMenuOpen(false)}
                            className="text-slate-300 hover:text-blue-400 transition"
                        >
                            Dashboard
                        </Link>

                        <Link
                            to="/login"
                            onClick={() => setMenuOpen(false)}
                            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-center py-3 rounded-xl text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition"
                        >
                            Login
                        </Link>

                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;