import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import "./Echo.css";

const Echo = () => {
    const { user } = useContext(AuthContext);

    return (
        <>
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
        </>
    );
};

export default Echo;
