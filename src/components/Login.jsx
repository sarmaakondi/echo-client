import { useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { axiosInstance } from "../axiosConfig";
import { AuthContext } from "../context/AuthContext";

import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            const response = await axiosInstance.post("/login/", {
                username,
                password,
            });
            const { access, refresh } = response.data;
            const decoded = jwtDecode(access);

            // Store tokens in local storage
            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);

            // Store user details in auth context
            login({
                username: decoded.username,
                user_profile_picture: decoded.profile_picture_url,
            });
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.errors || "Invalid credentials");
            } else {
                setError("An error occurred");
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    className="login-form-field"
                    type="text"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    className="login-form-field"
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button id="login-button" type="submit">
                    Login
                </button>
            </form>
            <Link to="/register" id="register-link">
                No account? register here
            </Link>
            {error && <div className="error-message">{error}</div>}
        </>
    );
};

export default Login;
