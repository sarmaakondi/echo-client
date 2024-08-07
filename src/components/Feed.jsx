import Echo from "./Echo";
import Comments from "./Comments";

import "./Feed.css";
import { useState } from "react";

const Feed = ({ echoes, handleCreateEcho }) => {
    const [commentVisibility, setCommentVisibility] = useState({});

    const handleClick = (echoId) => {
        setCommentVisibility((prevVisibility) => ({
            ...prevVisibility,
            [echoId]: !prevVisibility[echoId],
        }));
    };

    return (
        <div className="child-container">
            {/* Render Echo form */}
            <Echo onCreateEcho={handleCreateEcho} />

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
                                <span
                                    className="comments-state"
                                    onClick={() => handleClick(echo.id)}>
                                    {echo.comments?.length ?? 0} repl
                                    {echo.comments?.length === 1 ? "y" : "ies"}
                                </span>
                                <span>
                                    {" "}
                                    . Liked by {echo.likes} resonato
                                    {echo.likes === 1 ? "r" : "rs"}
                                </span>
                            </p>

                            {/* Render Comments */}
                            <Comments
                                echo={echo}
                                showComments={commentVisibility[echo.id]}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
