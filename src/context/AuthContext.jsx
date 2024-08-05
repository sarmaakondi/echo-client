import { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "../axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            const decoded = jwtDecode(token);
            setUser({ username: decoded.username });
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setUser(null);
    };

    const refreshAccessToken = async () => {
        const refresh_token = localStorage.getItem("refresh_token");
        if (refresh_token) {
            try {
                const response = await axiosInstance.post("/refresh/", {
                    refresh: refresh_token,
                });
                const { access } = response.data;
                localStorage.setItem("access_token", access);
                const decoded = jwtDecode(access);
                setUser({ username: decoded.username });
            } catch (error) {
                console.error("Error refreshing token:", error.response.data);
                logout();
            }
        }
    };

    return (
        <AuthContext.Provider
            value={{ user, login, logout, refreshAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};
