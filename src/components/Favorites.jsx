import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import Feed from "./Feed";

import "./Favorites.css";

const Favorites = ({ likedEchoes, handleLike, handleCreateComment }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className="child-container">
            {!user ? (
                <h1 id="no-auth-title">Login required!</h1>
            ) : likedEchoes.length === 0 ? (
                <h1 id="no-favorites-title">No favorite echoes yet!</h1>
            ) : (
                <>
                    <h1 id="favorite-header">
                        Your
                        <i className="favorite-icon fa-regular fa-heart"></i>
                        Echoes
                    </h1>
                    <Feed
                        echoes={likedEchoes}
                        handleLike={handleLike}
                        handleCreateComment={handleCreateComment}
                        showEchoForm={false}
                    />
                </>
            )}
        </div>
    );
};

export default Favorites;
