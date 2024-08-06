import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import "./Feed.css";

const Feed = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
            {user ? (
                <div className="child-container">
                    <div>
                        <div className="profile-header">
                            <div className="profile-container">
                                <img
                                    className="profile-picture"
                                    src="/favicon.png"
                                />
                                <p className="username">Sarma Akondi</p>
                            </div>
                            <button id="post-button">Echo</button>
                        </div>
                        <input
                            type="text"
                            name="echo-text"
                            id="echo-text"
                            placeholder="Start an echo..."
                        />
                    </div>
                </div>
            ) : (
                <h1>Feed</h1>
            )}
        </>
    );
};

export default Feed;
