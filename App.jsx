import React, { useState } from "react";
import About from "./routes/About";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Grid from "./components/Grid";
import Image from "./components/Image";
import axios from "axios";
import { useEffect } from "react";
function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getImage = async () => {
      try {
        const image = await axios({
          url: "http://localhost:3002/getFiles",
          method: "GET",
        });
        setIsLoading(false);
        setImages(image.data); // -> 객체배열.
        // console.log(image.data[0].imgSrc);
      } catch (e) {
        setError(e);
      }
    };
    getImage();
  }, []);

  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Image images={images} setImages={setImages} />
      <Grid images={images} setImages={setImages} />
    </Router>
  );
}

export default App;
