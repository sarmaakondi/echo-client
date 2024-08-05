import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Aside from "./components/Aside";
import Profile from "./components/Profile";

import "./App.css";

function App() {
    return (
        <Router>
            <div className="app">
                <NavBar />
                <Hero />
                <Aside />
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
