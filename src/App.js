import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Events from "./components/Events/Events";
import Pages from "./components/Pages/Pages";
import Chat from "./components/Chat/Chat";
import Home from "./components/Home/Home";
import People from "./components/People/People";
import DirectMessanges from "./components/DirectMessanges/DirectMessanges";
import Announcement from "./components/Announcement/Announcement";
import Updates from "./components/Updates/Updates";
import Letsvote from "./components/LetsVote/Letsvote";
import General from "./components/General/General";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="main__wrap">
      <BrowserRouter>
        {/* <Sidebar /> */}
        <div className="main__part">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="/home" element={<Home />} />
            <Route path="/general" element={<General />} />
            <Route path="/people" element={<People />} />
            <Route path="/direct" element={<DirectMessanges />} />
            <Route path="/announcements" element={<Announcement />} />
            <Route path="/updates" element={<Updates />} />
            <Route path="/letsvote" element={<Letsvote />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
