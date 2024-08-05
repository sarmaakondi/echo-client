import axiosInstance from "../axiosConfig";

import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

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
            console.log("User logged in:", response.data);
            login({ username: response.data.username });
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
