import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

import Echo from "./Echo";
import Comments from "./Comments";
import formatTimeAgo from "../utility";

import "./Feed.css";

const Feed = ({
    echoes,
    handleCreateEcho,
    handleLike,
    handleCreateComment,
}) => {
    const { user } = useContext(AuthContext);
    const [commentVisibility, setCommentVisibility] = useState({});
    const [respondingEchoId, setRespondingEchoId] = useState(null);
    const [newComment, setNewComment] = useState("");

    const handleClick = (echoId) => {
        setCommentVisibility((prevVisibility) => ({
            ...prevVisibility,
            [echoId]: !prevVisibility[echoId],
        }));
    };

    const handleCommentClick = (echoId) => {
        setRespondingEchoId((prevId) => (prevId === echoId ? null : echoId));
    };

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const handleCommentSubmit = async (echoId) => {
        await handleCreateComment(echoId, newComment);
        setRespondingEchoId(null);
        setNewComment("");
    };

    return (
        <div className="child-container">
            {/* Render Echo form */}
            <Echo onCreateEcho={handleCreateEcho} />

            {/* Render Feed */}
            <div className={user ? "compact-feed" : "feed"}>
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
                            <p className="feed-username">
                                {echo.user}
                                <span className="echo-time-age">
                                    {formatTimeAgo(echo.created_at)}
                                </span>
                            </p>
                            <p className="feed-content">{echo.content}</p>
                            <div className="reaction-container">
                                {user && (
                                    <>
                                        <i
                                            className={`fa${
                                                echo.is_liked
                                                    ? "-solid"
                                                    : "-regular"
                                            } fa-heart`}
                                            onClick={() =>
                                                handleLike(echo.id)
                                            }></i>
                                        <i
                                            className="fa-regular fa-comment"
                                            onClick={() =>
                                                handleCommentClick(echo.id)
                                            }></i>
                                    </>
                                )}
                                <p className="feed-stats">
                                    <span
                                        className="comments-state"
                                        onClick={() => handleClick(echo.id)}>
                                        {echo.comments?.length ?? 0} respons
                                        {echo.comments?.length === 1
                                            ? "e"
                                            : "es"}
                                    </span>
                                    <span>
                                        {" "}
                                        . Liked by {echo.likes} resonato
                                        {echo.likes === 1 ? "r" : "rs"}
                                    </span>
                                </p>
                            </div>

                            {/* Create comment */}
                            <div
                                className={`create-comment ${
                                    respondingEchoId === echo.id ? "show" : ""
                                }`}>
                                {respondingEchoId === echo.id && (
                                    <div className="comment-form">
                                        <input
                                            id="response-input"
                                            type="text"
                                            value={newComment}
                                            onChange={handleCommentChange}
                                            placeholder="Write a response..."
                                        />
                                        <button
                                            id="respond-button"
                                            onClick={() =>
                                                handleCommentSubmit(echo.id)
                                            }>
                                            Respond
                                        </button>
                                    </div>
                                )}
                            </div>

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
