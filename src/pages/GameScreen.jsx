import { useEffect, useState } from "react";
import * as styles from "../styles/GameScreen.module.css";
import ClickCounter from "../components/ClickCounter";
import Virus from "../components/Virus";
import SideBar from "../components/SideBar";

let newCases;
const date = new Date();

var valuT = "2021-" + (date.getMonth() + 1) + "-" + (date.getDate() - 1);
var valuY = "2021-" + (date.getMonth() + 1) + "-" + (date.getDate() - 2);

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
  setInterval(() => setTime(performance.now()), 1000);
  return (
    <div className="screen">
      <div className={styles.main}>
        <Virus className={styles.virus} toggle={OnVirusClick} />
        <ClickCounter
          clickCount={clicks}
          clicksToWin={newCases}
          time={`Czas: ${Math.floor(Time / 1000)}s`}
        />
      </div>
      <SideBar />
    </div>
  );

  function OnVirusClick(e) {
    if (!e.isTrusted) {
      alert("Tak się nie bawimy");
      return;
    }
    setClicks(++clicks);
  }
}
