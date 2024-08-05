import { useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

import { axiosInstance } from "../axiosConfig";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
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
            login({ username: decoded.username });

            console.log("User logged in:", decoded);
        } catch (error) {
            console.error("Error logging in user:", error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
