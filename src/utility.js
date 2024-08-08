// Utility function to calculate time ago to display for echoes and comments
function formatTimeAgo(createdAt) {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const differenceInSeconds = Math.floor((now - createdDate) / 1000);

    // Latest
    if (differenceInSeconds < 60) {
        return "now";

        // Within the hour
    } else if (differenceInSeconds < 3600) {
        return `${Math.floor(differenceInSeconds / 60)}m`;

        // Within in 24 hours
    } else if (differenceInSeconds < 86400) {
        const hours = Math.floor(differenceInSeconds / 3600);
        const minutes = Math.floor((differenceInSeconds % 3600) / 60);
        return `${hours}hr${minutes > 0 ? ` ${minutes}m` : ""}`;

        // More than 24 hours
    } else {
        const days = Math.floor(differenceInSeconds / 86400);
        return `${days} day${days > 1 ? "s" : ""}`;
    }
}

export default formatTimeAgo;
