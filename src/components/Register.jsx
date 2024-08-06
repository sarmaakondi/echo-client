import { useState } from "react";

import { axiosInstance } from "../axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");
        try {
            await axiosInstance.post("/register/", {
                username,
                email,
                password,
            });
            navigate("/profile");
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.errors || "An error occurred");
            } else {
                setError("An erorr occurred");
            }
        }
    };

    return (
        <div>
            <div className="app-logo">
                <img src="/favicon.png" alt="logo" id="logo" />
                <h1 id="app-name">Echo</h1>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <input
                    className="register-form-field"
                    type="text"
                    value={username}
                    required
                    placeholder="Username"
                    onChange={(event) => setUsername(event.target.value)}
                />
                <input
                    className="register-form-field"
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    className="register-form-field"
                    type="password"
                    value={password}
                    required
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button id="register-button" type="submit">
                    Register
                </button>
                <Link to="/login" id="login-link">
                    Have an account? login here
                </Link>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
};

export default Register;
