import { useEffect, useState } from "react"
import * as styles from "../styles/GameScreen.module.css"
import ClickCounter from "./ClickCounter"
import Virus from "./Virus"

export default function GameScreen() {
    let [clicks, setClicks] = useState(0)
    let [Time, setTime] = useState(0)
    setInterval(() => setTime(performance.now()), 1000)
    return (
        <div className={styles.main}>
            <Virus className={styles.virus} toggle={OnVirusClick}/>
            <ClickCounter clickCount={clicks} clicksToWin={111} time={`Czas: ${Math.floor(Time/1000)}s`}/>
        </div>
    )
    function OnVirusClick(e) {
        if (!e.isTrusted) {
            alert("Tak się nie bawimy")
            return
        }
        setClicks(++clicks)
    }
}