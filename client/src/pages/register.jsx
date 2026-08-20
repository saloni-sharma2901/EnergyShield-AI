import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5001/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setMessage(data.message || "Registration failed");
                return;
            }

            // Save login token
            localStorage.setItem("token", data.token);

            // Save user
            localStorage.setItem("user", JSON.stringify(data.user));

            // Go to dashboard
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
            setMessage("Server is not running");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">

            <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">

                <h1 className="text-3xl font-bold text-white text-center">
                    Create Account
                </h1>

                <p className="text-slate-400 text-center mt-2 mb-8">
                    Join EnergyShield AI
                </p>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-4 mb-4 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-blue-500"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-4 mb-4 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-blue-500"
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 mb-4 rounded-lg bg-slate-800 text-white border border-slate-700 outline-none focus:border-blue-500"
                        required
                        minLength={6}
                    />

                    {message && (
                        <p className="text-red-400 text-sm text-center mb-4">
                            {message}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white py-4 rounded-lg font-semibold transition"
                    >
                        {loading ? "Creating Account..." : "Create Account"}
                    </button>

                </form>

                <p className="text-slate-400 text-center mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-400 hover:text-blue-300"
                    >
                        Login
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default Register;