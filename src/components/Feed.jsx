import Echo from "./Echo";
import Comments from "./Comments";

import "./Feed.css";

const Feed = ({ echoes, handleCreateEcho }) => {
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
                                {echo.comments.length} repl
                                {echo.comments.length === 1 ? "y" : "ies"}
                                <span>
                                    {" "}
                                    . Liked by {echo.likes} resonato
                                    {echo.likes === 1 ? "r" : "rs"}
                                </span>
                            </p>

                            {/* Render Comments */}
                            <Comments echo={echo} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Feed;
