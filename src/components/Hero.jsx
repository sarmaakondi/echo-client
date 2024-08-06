import { Navigate, Outlet } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
    const path = window.location.pathname;

    if (path === "/") {
        return <Navigate to="/feed" />;
    }

    return (
        <div className="parent-container">
            <Outlet />
        </div>
    );
};

export default Hero;
