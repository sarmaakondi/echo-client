// Utility function to calculate time ago to display for echoes and comments
export const formatTimeAgo = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const differenceInSeconds = Math.floor((now - createdDate) / 1000);

    if (differenceInSeconds < 60) {
        return "now";
    } else if (differenceInSeconds < 3600) {
        return `${Math.floor(differenceInSeconds / 60)}m ago`;
    } else if (differenceInSeconds < 86400) {
        const hours = Math.floor(differenceInSeconds / 3600);
        const minutes = Math.floor((differenceInSeconds % 3600) / 60);
        return `${hours}hr${minutes > 0 ? ` ${minutes}m` : ""} ago`;
    } else {
        const days = Math.floor(differenceInSeconds / 86400);
        return `${days} day${days > 1 ? "s" : ""} ago`;
    }
};
