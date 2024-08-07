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
                                    src="profile.png"
                                    alt="user profile picture"
                                />
                            </div>
                            <div>
                                <p className="comment-username">
                                    {comment.user}
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
