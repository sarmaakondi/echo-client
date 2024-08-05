import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Feed from "./components/Feed";
import Search from "./components/Search";
import Echo from "./components/Echo";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";
import Aside from "./components/Aside";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="app">
                <NavBar />

                <Routes>
                    <Route path="/" element={<Hero />}>
                        <Route path="/feed" element={<Feed />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/create" element={<Echo />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/profile" element={<Profile />} />
                    </Route>
                </Routes>

                <Aside />
            </div>
        </Router>
    );
}

export default App;
