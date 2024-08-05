import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import Login from "./Login";

const Profile = () => {
    const { user } = useContext(AuthContext);

    return user ? <p>Logged in</p> : <Login />;
};

export default Profile;
