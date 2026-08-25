const API_URL = "https://energyshield-ai.onrender.com";

export const api = async (endpoint, options = {}) => {
    const token = localStorage.getItem("token");

    const headers = {
        "Content-Type": "application/json",
        ...(options.headers || {}),
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers,
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
        throw new Error(data?.message || `Request failed: ${response.status}`);
    }

    return data;
};

export const registerUser = async (userData) => {
    return api("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
    });
};

export const loginUser = async (userData) => {
    return api("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(userData),
    });
};

export const getDashboardData = async () => {
    return api("/api/dashboard");
};

export const analyzeEnergyRisk = async (news) => {
    return api("/api/ai/analyze", {
        method: "POST",
        body: JSON.stringify({ news }),
    });
};
