import React, { useEffect, useState } from "react";
import Background from "./components/Background/Background.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import Contact from "./components/Contact/Contact.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Explore from "./components/Explore/Explore.jsx";
export const App = () => {
  let heroData = [
    { text1: "Dive Into", text2: "Speed" },
    { text1: "Indulge", text2: "your Passions" },
    { text1: "Give In to", text2: "Your Life" },
  ];

  const [heroCount, setHeroCount] = useState(0); // set the hero count
  const [playStatus, setPlayStatus] = useState(false); // set the video which is playing

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3500);
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>

      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus} //to play/pause video
        heroData={heroData[heroCount]} // to render the text above
        heroCount={heroCount} // take the count
        setHeroCount={setHeroCount} // to set image accordingly
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
