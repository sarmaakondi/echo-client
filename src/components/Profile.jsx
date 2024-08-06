import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import Login from "./Login";
import "./Profile.css";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="profile-container">
            {user ? (
                <>
                    <h1 id="app-context">
                        Your voice has power
                        <br />
                        Let it <span id="echo">Echo</span> across the world!
                    </h1>
                    <div className="user-container">
                        <div className="user-handle">
                            <img
                                className="user-profile-pic"
                                src="profile.png"
                            />
                            <p id="username">{user["username"]}</p>
                        </div>
                        <a id="logout-link" href="#">
                            Logout
                        </a>
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
