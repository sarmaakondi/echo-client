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

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AuthContext";

import {
    fetchEchoes,
    fetchEchoesNoAuth,
    createEcho,
    toggleLikeEcho,
    createComment,
} from "./api";

import "./App.css";

function App() {
    const { user } = useContext(AuthContext);
    const [feed, setFeed] = useState([]);

    const handleCreateEcho = async (content) => {
        try {
            const newEcho = await createEcho(content);
            setFeed([newEcho, ...feed]);
        } catch (error) {
            console.error("Failed to create new echo:", error);
        }
    };

    const handleLike = async (echoId) => {
        try {
            const updatedEcho = await toggleLikeEcho(echoId);
            setFeed((previousFeed) =>
                previousFeed.map((echo) =>
                    echo.id === echoId ? { ...echo, ...updatedEcho } : echo
                )
            );
        } catch (error) {
            console.error("Failed to like/unlike echo:", error);
        }
    };

    const handleCreateComment = async (echoId, content) => {
        try {
            const updatedEcho = await createComment(echoId, content);
            setFeed((previousFeed) =>
                previousFeed.map((echo) =>
                    echo.id === echoId ? { ...echo, ...updatedEcho } : echo
                )
            );
        } catch (error) {
            console.error("Failed to create comment:", error);
        }
    };

    useEffect(() => {
        const loadEchoes = async () => {
            try {
                const echoes =
                    user !== null
                        ? await fetchEchoes()
                        : await fetchEchoesNoAuth();
                setFeed(echoes);
            } catch (error) {
                console.error("Failed to load echoes:", error);
            }
        };
        loadEchoes();
    }, [user]);

    return (
        <Router>
            <div className="app">
                <NavBar />

                <Routes>
                    <Route path="/" element={<Hero />}>
                        <Route
                            path="/feed"
                            element={
                                <Feed
                                    echoes={feed}
                                    handleCreateEcho={handleCreateEcho}
                                    handleLike={handleLike}
                                    handleCreateComment={handleCreateComment}
                                />
                            }
                        />
                        <Route path="/search" element={<Search />} />
                        <Route path="/create" element={<Echo />} />
                        <Route
                            path="/favorites"
                            element={
                                <Favorites
                                    handleLike={handleLike}
                                    handleCreateComment={handleCreateComment}
                                />
                            }
                        />
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
