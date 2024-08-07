import { axiosInstance } from "./axiosConfig";

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
