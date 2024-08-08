import { axiosInstance } from "./axiosConfig";

// Fetch all the echoes to render the feed (with authentication)
export const fetchEchoes = async () => {
    try {
        const token = localStorage.getItem("access_token");
        const response = await axiosInstance.get("/list-echoes/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching echoes",
            error.response?.data || error.message
        );
    }
};

// Fetch all the echoes to render the feed (no authentication)
export const fetchEchoesNoAuth = async () => {
    try {
        const response = await axiosInstance.get("/list-echoes-no-auth/");
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

// Create new Echo
export const createComment = async (echoId, content) => {
    try {
        const token = localStorage.getItem("access_token");
        const response = await axiosInstance.post(
            "/create-comment/",
            { echo_id: echoId, content },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error creating new comment",
            error.response?.data || error.message
        );
    }
};

// Fetch all the liked echoes to render the feed
export const fetchLikedEchoes = async () => {
    try {
        const token = localStorage.getItem("access_token");
        const response = await axiosInstance.get("/list-liked-echoes/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error(
            "Error fetching liked echoes",
            error.response?.data || error.message
        );
    }
};

// Upload profile picture
export const uploadProfilePicture = async (file) => {
    try {
        const token = localStorage.getItem("access_token");
        const formData = new FormData();
        formData.append("profile_picture", file);

        const response = await axiosInstance.post(
            "/upload-profile-pic/",
            formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error(
            "Error uploading profile picture",
            error.response?.data || error.message
        );
    }
};
