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
                <div className="child-container">
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
                </div>
            ) : (
                <h1 id="no-auth-title">Login required!</h1>
            )}
        </>
    );
};

export default Favorites;
