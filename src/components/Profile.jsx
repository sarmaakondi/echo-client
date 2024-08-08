import { AuthContext } from "../context/AuthContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Login from "./Login";
import { uploadProfilePicture } from "../api";
import "./Profile.css";

const Profile = () => {
    const { user, logout } = useContext(AuthContext);
    const [profilePicture, setProfilePicture] = useState(
        user?.user_profile_picture || "profile.png"
    );
    const [file, setFile] = useState(null);

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/profile");
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            const data = await uploadProfilePicture(file);
            if (data) {
                setProfilePicture(data.profile_picture_url);
            }
        }
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
                                src={profilePicture}
                            />
                            <p id="username">{user["username"]}</p>
                        </div>

                        <div className="upload-container">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                id="upload-input"
                            />
                            <button
                                onClick={handleUpload}
                                id="upload-button"
                                disabled={!file}>
                                Upload Profile Picture
                            </button>
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
