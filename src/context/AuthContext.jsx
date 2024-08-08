import { createContext, useEffect, useState, useCallback } from "react";
import { jwtDecode } from "jwt-decode";
import { axiosInstance, setupInterceptors } from "../axiosConfig";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            const decoded = jwtDecode(token);
            setUser({
                username: decoded.username,
                user_profile_picture: decoded.profile_picture_url,
            });
        }
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = useCallback(() => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        setUser(null);
    }, []);

    const refreshAccessToken = useCallback(async () => {
        const refresh_token = localStorage.getItem("refresh_token");

        if (refresh_token) {
            try {
                const response = await axiosInstance.post("/refresh/", {
                    refresh: refresh_token,
                });
                const { access } = response.data;
                localStorage.setItem("access_token", access);
                const decoded = jwtDecode(access);
                setUser({
                    username: decoded.username,
                    user_profile_picture: decoded.profile_picture_url,
                });
            } catch (error) {
                console.error(
                    "Error refreshing token:",
                    error.response?.data || error.message
                );
                logout();
            }
        }
    }, [logout]);

    // Setup Axios interceptors
    useEffect(() => {
        setupInterceptors(refreshAccessToken);
    }, [refreshAccessToken]);

    return (
        <AuthContext.Provider
            value={{ user, login, logout, refreshAccessToken }}>
            {children}
        </AuthContext.Provider>
    );
};
