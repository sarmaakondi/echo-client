import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-container">
            <Link to="/feed" className="nav-link">
                <div className="nav-icon">
                    <i className="fa-solid fa-house"></i>
                </div>
            </Link>
            <Link to="/search" className="nav-link">
                <div className="nav-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </Link>
            <Link to="/create" className="nav-link">
                <div className="nav-icon">
                    <i className="fa-solid fa-plus"></i>
                </div>
            </Link>
            <Link to="/favorites" className="nav-link">
                <div className="nav-icon">
                    <i className="fa-regular fa-heart"></i>
                </div>
            </Link>
            <Link to="/profile" className="nav-link">
                <div className="nav-icon">
                    <i className="fa-regular fa-user"></i>
                </div>
            </Link>
        </div>
    );
};

export default NavBar;
