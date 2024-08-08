import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-container">
            <NavLink
                to="/feed"
                className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                }>
                <div className="nav-icon">
                    <i className="fa-solid fa-house"></i>
                </div>
            </NavLink>
            <NavLink
                to="/search"
                className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                }>
                <div className="nav-icon">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
            </NavLink>
            {/* Commented out below to decide and remove later */}
            {/* <NavLink
                to="/create"
                className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                }>
                <div className="nav-icon">
                    <i className="fa-solid fa-plus"></i>
                </div>
            </NavLink> */}
            <NavLink
                to="/favorites"
                className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                }>
                <div className="nav-icon">
                    <i className="fa-regular fa-heart"></i>
                </div>
            </NavLink>
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                }>
                <div className="nav-icon">
                    <i className="fa-regular fa-user"></i>
                </div>
            </NavLink>
        </div>
    );
};

export default NavBar;
