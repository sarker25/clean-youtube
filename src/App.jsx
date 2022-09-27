import Navbar from "./components/Navbar";

import CssBaseline from "@mui/material/CssBaseline";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Player from "./components/pages/Player";
import NotFound from "./components/pages/NotFound";
import { useState } from "react";

const App = () => {
  const [currentFilter, setCurrentFilter] = useState("");
  const handleFilter = (value) => {
    setCurrentFilter(value);
  };
  // console.log(currentFilter);
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar handleFilter={handleFilter} />
      <Routes>
        <Route path="/" element={<Home currentFilter={currentFilter} />} />
        <Route path="/player/:playlistId" element={<Player />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
