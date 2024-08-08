import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";

import "./Echo.css";

const Echo = ({ onCreateEcho }) => {
    const { user } = useContext(AuthContext);
    const [echoContent, setEchoContent] = useState("");

    const handleEchoClick = () => {
        if (echoContent.trim()) {
            onCreateEcho(echoContent);
            setEchoContent("");
        }
    };

    return (
        <>
            {user && (
                <div className="profile-parent-container">
                    <div className="profile-header">
                        <div className="echo-profile-container">
                            <img
                                className="profile-picture"
                                src={
                                    user?.user_profile_picture || "profile.png"
                                }
                            />
                            <p className="username">{user["username"]}</p>
                        </div>
                        <button id="post-button" onClick={handleEchoClick}>
                            Echo
                        </button>
                    </div>
                    <input
                        autoComplete="off"
                        type="text"
                        name="echo-text"
                        id="echo-text"
                        placeholder="Start an echo..."
                        value={echoContent}
                        onChange={(event) => setEchoContent(event.target.value)}
                    />
                </div>
            )}
        </>
    );
};

export default Echo;
