import { axiosInstance } from "./axiosConfig";

// Fetch all the echoes to render the feed
export const fetchEchoes = async () => {
    try {
        const response = await axiosInstance.get("/list-echoes/");
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching echoes",
            error.response?.data || error.message
        );
    }
};

// Create new Echo
export const createEcho = async (content) => {
    try {
        const token = localStorage.getItem("access_token");
        const response = await axiosInstance.post(
            "/create-echo/",
            { content },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error creating new echo",
            error.response?.data || error.message
        );
    }
};

// Like/Unlike an Echo
export const toggleLikeEcho = async (echoId) => {
    try {
        const token = localStorage.getItem("access_token");
        const response = await axiosInstance.post(`/like-echo/${echoId}/`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(
            "Error toggline like echo",
            error.response?.data || error.message
        );
    }
};
