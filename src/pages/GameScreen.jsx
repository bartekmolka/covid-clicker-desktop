import { useState } from "react";
import * as styles from "../styles/GameScreen.module.css";
import ClickCounter from "../components/ClickCounter";
import Virus from "../components/Virus";
import Win from "../components/Win";
import PowerUpsTab from "../components/PowerUpsTab";
import music from "../music.json";

let newCases;
const date = new Date();
let winTime;

var valuT = "2021-" + (date.getMonth() + 1) + "-" + (date.getDate() - 1);
var valuY = "2021-" + (date.getMonth() + 1) + "-" + (date.getDate() - 2);
let musicPlayer = null;

console.log(valuY, valuT);

fetch(
  "https://api.covid19api.com/country/poland/status/confirmed?from=" + valuY +
  "T00:00:00Z&to=" + valuT + "T00:00:00Z",
)
  .then((res) => res.json())
  .then((res) => newCases = res[1]["Cases"] - res[0]["Cases"]);

export default function GameScreen() {
  let [clicks, setClicks] = useState(0);
  let [Time, setTime] = useState(0);
  let [multi, setMulti] = useState(1);
  setInterval(() => setTime(performance.now()), 1000);
  return (
    <div className="screen">
      {onWin()}
      <div className={styles.main}>
        <Virus className={styles.virus} toggle={OnVirusClick} />
        <ClickCounter
          clickCount={clicks}
          clicksToWin={newCases}
          time={`Czas: ${Math.floor(Time / 1000)}s`}
        />
      </div>
      <PowerUpsTab clicks={clicks} onUpdate={onUpdate}/>
      <div className={styles.pusty}></div>
    </div>
  );

  function onWin() {
    if (clicks >= newCases) {
      if (!winTime)
        winTime = performance.now()
      console.log(winTime)
      return (
        <Win score={clicks} time={Math.floor(winTime / 1000)} />
      )
    }
  }
  function OnVirusClick(e) {
    if (!e.isTrusted) {
      alert("Tak się nie bawimy");
      return;
    }
    setClicks(clicks + multi);
  }
  function onUpdate(price, pMulti)
  {
    if(pMulti === "music")
    {
      const musicId = Math.floor(Math.random() * music.length);
      if(musicPlayer !== null) musicPlayer.pause();
      musicPlayer = new Audio(music[musicId]);
      musicPlayer.play(); 
    }else
    {
      setMulti(multi + pMulti)
    }
    setClicks(clicks - price);
  }
}
