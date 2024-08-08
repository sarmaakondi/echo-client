import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import "./Favorites.css";

const Favorites = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {user ? (
                <>
                    <div className="favorite-echo-container">
                        <h1>Your Favorite Echoes</h1>
                    </div>
                    <div className="favorite-echo-content"></div>
                </>
            ) : (
                <h1 id="no-auth-title">Login required!</h1>
            )}
        </>
    );
};

export default Favorites;
