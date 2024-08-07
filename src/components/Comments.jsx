import "./Comments.css";

const Comments = ({ echo }) => {
    let showComments = true;
    return (
        <div key={echo.id}>
            {(echo.comments ?? []).map((comment) => (
                <div key={comment.id} className="comment">
                    {showComments && (
                        <p>
                            <span className="feed-comment-user">
                                {comment.user}:{" "}
                            </span>
                            {comment.content}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Comments;
