import { useNavigate, Outlet } from "react-router-dom";

import "./Hero.css";
import { useEffect } from "react";

const Hero = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === "/") {
            navigate("/feed");
        }
    }, [navigate]);

    return (
        <div className="parent-container">
            <Outlet />
        </div>
    );
};

export default Hero;
