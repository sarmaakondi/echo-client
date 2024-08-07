import "./Comments.css";

const Comments = ({ echo }) => {
    return (
        <>
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
        </>
    );
};

export default Comments;
