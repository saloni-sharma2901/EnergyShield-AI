import { useState } from "react";

import { loginUser } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        setError("");

        if (!email || !password) {
            setError("Please enter email and password");
            return;
        }

        try {
            setLoading(true);

            const data = await loginUser({
                email,
                password,
            });

            if (data.success) {
                // Save JWT token
                localStorage.setItem("token", data.token);

                // Save user information
                localStorage.setItem("user", JSON.stringify(data.user));

                alert("Login successful!");

                // Go to dashboard
                navigate("/dashboard");
            } else {
                setError(data.message || "Login failed");
            }
        } catch (error) {
            console.error(error);
            setError("Unable to connect to server");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 flex justify-center items-center px-4">
            <div className="bg-slate-900 p-10 rounded-2xl w-full max-w-md">

                <h2 className="text-3xl text-white font-bold text-center mb-8">
                    Login
                </h2>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full mt-2 p-4 rounded-lg bg-slate-800 text-white"
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-5 p-4 rounded-lg bg-slate-800 text-white"
                    />

                    {error && (
                        <p className="text-red-400 mt-4 text-sm">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    <p className="text-slate-400 text-center mt-6">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-blue-400 hover:text-blue-300"
                        >
                            Register
                        </Link>
                    </p>

                </form>

            </div>
        </div>
    );
}

export default Login;