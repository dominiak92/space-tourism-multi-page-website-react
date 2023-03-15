import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom"
import Header from "./components/UI/header/Header";
import Home from "./pages/Home/Home";
import Technology from "./pages/Technology/Technology";
import Destination from "./pages/Destination/Destination";
import Crew from "./pages/Crew/Crew";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
