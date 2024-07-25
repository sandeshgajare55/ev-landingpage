import React, { useEffect, useState } from "react";
import Background from "./components/Background/Background.jsx";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { Home } from "./components/Home/Home.jsx";
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
      <Home />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
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
