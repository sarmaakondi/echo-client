import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import Login from "./Login";
import "./Profile.css";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="profile-container">
            <div className="app-logo">
                <img src="/favicon.png" alt="logo" id="logo" />
                <h1 id="app-name">Echo</h1>
            </div>
            {user ? <p>Logged in</p> : <Login />}
        </div>
    );
};

export default Profile;
