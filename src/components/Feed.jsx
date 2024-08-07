import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import "./Feed.css";

const Feed = ({ echoes }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className="child-container">
            {user && (
                <div>
                    <div className="profile-header">
                        <div className="echo-profile-container">
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
            )}

            {/* Render Feed */}
            <div className="feed">
                {echoes.map((echo) => (
                    <div key={echo.id} className="echo">
                        <p>{echo.content}</p>
                        <p>By: {echo.user}</p>
                        <p>Likes: {echo.likes}</p>
                        <div>
                            {echo.comments.map((comment, index) => (
                                <div key={index} className="comment">
                                    <p>
                                        {comment.user}: {comment.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
