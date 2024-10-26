import styles from "./home.module.css";
import { useEffect, useRef } from "react";
import ScrollButton from "../components/ScrollButton";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import bgMusic from "../assets/bgMusic.mp3";
import woodWalk1 from "../assets/wood_walk_1.mp3";
import woodWalk2 from "../assets/wood_walk_2.mp3";
import woodWalk3 from "../assets/wood_walk_3.mp3";
import woodWalk4 from "../assets/wood_walk_4.mp3";
import Section4 from "../components/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";
import Section7 from "../components/Section7";
import Section8 from "../components/Section8";
import Section9 from "../components/Section9";
import Section10 from "../components/Section10";
import Section11 from "../components/Section11";
import Section12 from "../components/Section12";

export default function Home() {
  const audioRef = useRef(null);
  const woodWalkSounds = [woodWalk1, woodWalk2, woodWalk3, woodWalk4];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.play();
    }
  });

  function playRandomWoodWalk() {
    const randomIndex = Math.floor(Math.random() * woodWalkSounds.length);
    const audio = new Audio(woodWalkSounds[randomIndex]);
    audio.volume = 0.2;
    audio.play();
  }

  return (
    <div>
      <audio ref={audioRef} src={bgMusic} loop />
      <div className={styles.container}>
        <div className={styles.bgImage}>
          <p className={styles.heading}>Les murmures du lac</p>
        </div>
        <ScrollButton target="section1" onClick={playRandomWoodWalk} />
      </div>
      <Section1 onClick={playRandomWoodWalk} />
      <Section2 onClick={playRandomWoodWalk} />
      <Section3 onClick={playRandomWoodWalk} />
      <Section4 onClick={playRandomWoodWalk} />
      <Section5 onClick={playRandomWoodWalk} />
      <Section6 onClick={playRandomWoodWalk} />
      <Section7 onClick={playRandomWoodWalk} />
      <Section8 onClick={playRandomWoodWalk} />
      <Section9 onClick={playRandomWoodWalk} />
      <Section10 onClick={playRandomWoodWalk} />
      <Section11 onClick={playRandomWoodWalk} />
      <Section12 onClick={playRandomWoodWalk} />
    </div>
  );
}
