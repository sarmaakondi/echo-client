import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";

import Feed from "./Feed";
import { fetchLikedEchoes } from "../api";

import "./Favorites.css";

const Favorites = ({ handleLike, handleCreateComment }) => {
    const { user } = useContext(AuthContext);
    const [likedEchoes, setLikedEchoes] = useState([]);

    useEffect(() => {
        const loadLikedEchoes = async () => {
            const echoes = await fetchLikedEchoes();
            setLikedEchoes(echoes);
        };

        if (user) {
            loadLikedEchoes();
        }
    }, [user]);

    return (
        <>
            {user ? (
                <>
                    <div className="favorite-echo-container">
                        <h1>Your Favorite Echoes</h1>
                    </div>
                    <Feed
                        echoes={likedEchoes}
                        handleLike={handleLike}
                        handleCreateComment={handleCreateComment}
                        showEchoForm={false}
                    />
                </>
            ) : (
                <h1 id="no-auth-title">Login required!</h1>
            )}
        </>
    );
};

export default Favorites;
