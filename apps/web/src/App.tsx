import { useNexusApp } from "./hooks/useNexusApp";
import Header from "./components/Header";
import Hero from "./components/Hero";
import S02Conversion from "./components/S02Conversion";
import S03GameModes from "./components/S03GameModes";
import S04CollisionEngine from "./components/S04CollisionEngine";
import S05HighScores from "./components/S05HighScores";
import S06CheatCodes from "./components/S06CheatCodes";
import S07FinalCTA from "./components/S07FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  useNexusApp();

  return (
    <>
      <div id="physics-layer">
        <canvas id="pixel-canvas" />
        <div className="nexus-scanlines" />
        <div className="nexus-vignette" />
      </div>

      <div className="nexus-page-shell">
        <Header />
        <Hero />
        <S02Conversion />
        <S03GameModes />
        <S04CollisionEngine />
        <S05HighScores />
        <S06CheatCodes />
        <S07FinalCTA />
        <Footer />
      </div>
    </>
  );
}
