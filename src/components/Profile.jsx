import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Login from "./Login";
import "./Profile.css";

const Profile = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/profile");
    };

    return (
        <div className="profile-container">
            {user ? (
                <>
                    <h1 id="app-context">
                        Your thoughts have power
                        <br />
                        Let them <span id="echo">Echo</span> across the world !
                    </h1>
                    <div className="user-container">
                        <div className="user-handle">
                            <img
                                className="user-profile-pic"
                                src="profile.png"
                            />
                            <p id="username">{user["username"]}</p>
                        </div>
                        <button id="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <div className="app-logo">
                        <img src="/favicon.png" alt="logo" id="logo" />
                        <h1 id="app-name">Echo</h1>
                    </div>
                    <Login />
                </>
            )}
        </div>
    );
};

export default Profile;
