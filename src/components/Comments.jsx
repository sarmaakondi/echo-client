import formatTimeAgo from "../utility";
import "./Comments.css";

const Comments = ({ echo, showComments }) => {
    return (
        <div key={echo.id} className={`comment ${showComments ? "show" : ""}`}>
            {(echo.comments ?? []).map((comment) => (
                <div key={comment.id}>
                    {showComments && (
                        <div className="comment-container">
                            <div>
                                <img
                                    className="comment-profile-picture"
                                    src={
                                        comment?.user_profile_picture ||
                                        "profile.png"
                                    }
                                    alt="user profile picture"
                                />
                            </div>
                            <div className="comment-child-container">
                                <p className="comment-username">
                                    {comment.user}
                                    <span className="comment-time-age">
                                        {formatTimeAgo(comment.created_at)}
                                    </span>
                                </p>
                                <p className="comment-content">
                                    {comment.content}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Comments;
