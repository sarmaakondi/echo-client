import "./Feed.css";

const Feed = () => {
    return (
        <div className="child-container">
            <div>
                <div className="profile-header">
                    <div className="profile-container">
                        <img className="profile-picture" src="/favicon.png" />
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
    );
};

export default Feed;
