import "./Aside.css";

const Aside = () => {
    return (
        <div className="aside-container">
            <div className="follow-echo-container">
                <div className="follow-header">
                    <p>Follow Resonators</p>
                    <button id="view-button">View All</button>
                </div>
                <div className="resonators">
                    <ul className="resonator">
                        <div className="resonator-container">
                            <div className="resonator-handle">
                                <img
                                    className="resonator-profile-pic"
                                    src="profile.png"
                                />
                                <li>John Doe</li>
                            </div>
                            <li>
                                <a href="#">Follow</a>
                            </li>
                        </div>
                        <div className="resonator-container">
                            <div className="resonator-handle">
                                <img
                                    className="resonator-profile-pic"
                                    src="profile.png"
                                />
                                <li>Jane Smith</li>
                            </div>
                            <li>
                                <a href="#">Follow</a>
                            </li>
                        </div>
                        <div className="resonator-container">
                            <div className="resonator-handle">
                                <img
                                    className="resonator-profile-pic"
                                    src="profile.png"
                                />
                                <li>Andy Cooper</li>
                            </div>
                            <li>
                                <a href="#">Follow</a>
                            </li>
                        </div>
                        <div className="resonator-container">
                            <div className="resonator-handle">
                                <img
                                    className="resonator-profile-pic"
                                    src="profile.png"
                                />
                                <li>Chris McCoy</li>
                            </div>
                            <li>
                                <a href="#">Follow</a>
                            </li>
                        </div>
                        <div className="resonator-container">
                            <div className="resonator-handle">
                                <img
                                    className="resonator-profile-pic"
                                    src="profile.png"
                                />
                                <li>Dan Brad</li>
                            </div>
                            <li>
                                <a href="#">Follow</a>
                            </li>
                        </div>
                        <div className="resonator-container">
                            <div className="resonator-handle">
                                <img
                                    className="resonator-profile-pic"
                                    src="profile.png"
                                />
                                <li>Abby Richard</li>
                            </div>
                            <li>
                                <a href="#">Follow</a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="today-echo-container">
                <div className="today-header">
                    <div className="today-header-handle">
                        <i className="fa-solid fa-at"></i>
                        <p>Echoes Today</p>
                    </div>
                    <button id="view-button">View All</button>
                </div>
                <div className="today-echo-section">
                    <div className="today-echo-profile">
                        <img
                            className="today-echo-profile-pic"
                            src="profile.png"
                        />
                        <p>Abby Richard</p>
                    </div>
                    <p className="echo-content">
                        I&apos;m really excited about starting my new job next
                        week, though I&apos;m a bit nervous about meeting
                        everyone. The company seems great and the role is
                        exactly what I&apos;ve been looking for, though.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Aside;
