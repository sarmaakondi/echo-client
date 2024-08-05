import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="nav-icon">
                <Link to="/home" className="nav-link">
                    <i className="fa-solid fa-house"></i>
                </Link>
            </div>
            <div className="nav-icon">
                <Link to="/search" className="nav-link">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Link>
            </div>
            <div className="nav-icon">
                <Link to="/create" className="nav-link">
                    <i className="fa-solid fa-plus"></i>
                </Link>
            </div>
            <div className="nav-icon">
                <Link to="/favorites" className="nav-link">
                    <i className="fa-regular fa-heart"></i>
                </Link>
            </div>
            <div className="nav-icon">
                <Link to="/profile" className="nav-link">
                    <i className="fa-regular fa-user"></i>
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
