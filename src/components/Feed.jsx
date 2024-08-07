import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import "./Feed.css";

const Feed = ({ echoes }) => {
    const { user } = useContext(AuthContext);

    return (
        <div className="child-container">
            {user && (
                <div className="profile-parent-container">
                    <div className="profile-header">
                        <div className="echo-profile-container">
                            <img
                                className="profile-picture"
                                src="/profile.png"
                            />
                            <p className="username">{user["username"]}</p>
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
                        <div>
                            <img
                                className="profile-picture"
                                src="profile.png"
                                alt="user profile picture"
                            />
                        </div>
                        <div className="feed-details-container">
                            <p className="feed-username">{echo.user}</p>
                            <p className="feed-content">{echo.content}</p>
                            <p className="feed-stats">
                                {echo.comments.length} repl
                                {echo.comments.length === 1 ? "y" : "ies"}
                                <span>
                                    {" "}
                                    . Liked by {echo.likes} resonato
                                    {echo.likes === 1 ? "r" : "rs"}
                                </span>
                            </p>
                            <div>
                                {echo.comments.map((comment, index) => (
                                    <div key={index} className="comment">
                                        <p>
                                            <span className="feed-comment-user">
                                                {comment.user}:{" "}
                                            </span>
                                            {comment.content}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
