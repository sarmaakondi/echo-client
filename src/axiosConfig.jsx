import axios from "axios";
import { jwtDecode } from "jwt-decode";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
});

const setupInterceptors = (refreshAccessToken) => {
    axiosInstance.interceptors.request.use(
        async (config) => {
            let token = localStorage.getItem("access_token");
            if (token) {
                const decodedToken = jwtDecode(token);
                const currentTime = Date.now() / 1000;

                // If token is expired or about to expire, refresh it
                if (decodedToken.exp < currentTime + 60) {
                    await refreshAccessToken();
                    token = localStorage.getItem("access_token");
                }
                config.headers["Authorization"] = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;
            if (error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                try {
                    await refreshAccessToken();
                    const newToken = localStorage.getItem("access_token");
                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${newToken}`;
                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        }
    );
};

export { axiosInstance, setupInterceptors };
