import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Feed from "./components/Feed";
import Search from "./components/Search";
import Echo from "./components/Echo";
import Favorites from "./components/Favorites";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Aside from "./components/Aside";

import { useEffect, useState } from "react";
import { fetchEchoes, createEcho } from "./api";

import "./App.css";

function App() {
    const [feed, setFeed] = useState([]);

    const loadEchoes = async () => {
        try {
            const echoes = await fetchEchoes();
            setFeed(echoes);
        } catch (error) {
            console.error("Failed to load echoes:", error);
        }
    };

    handleCreateEcho = async (content) => {
        try {
            const newEcho = await createEcho(content);
            setFeed([newEcho, ...feed]);
        } catch (error) {
            console.error("Failed to create new echo:", error);
        }
    };

    useEffect(() => {
        loadEchoes();
    }, []);

    return (
        <Router>
            <div className="app">
                <NavBar />

                <Routes>
                    <Route path="/" element={<Hero />}>
                        <Route path="/feed" element={<Feed echoes={feed} />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/create" element={<Echo />} />
                        <Route path="/favorites" element={<Favorites />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/register" element={<Register />} />
                    </Route>
                </Routes>

                <Aside />
            </div>
        </Router>
    );
}

export default App;
