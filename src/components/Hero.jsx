import { Outlet } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
    return (
        <div className="parent-container">
            <Outlet />
        </div>
    );
};

export default Hero;
