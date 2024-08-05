import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-container">
            <div className="nav-icon">
                <i className="fa-solid fa-house"></i>
            </div>
            <div className="nav-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="nav-icon">
                <i className="fa-solid fa-plus"></i>
            </div>
            <div className="nav-icon">
                <i className="fa-regular fa-heart"></i>
            </div>
            <div className="nav-icon">
                <i className="fa-regular fa-user"></i>
            </div>
        </div>
    );
};

export default NavBar;
