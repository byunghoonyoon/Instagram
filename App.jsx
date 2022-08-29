import React, { useState } from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";
function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Grid />
    </Router>
  );
}

export default App;
