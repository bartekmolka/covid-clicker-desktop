import { useEffect, useState } from "react"
import * as styles from "../styles/GameScreen.module.css"
import ClickCounter from "../components/ClickCounter"
import Virus from "../components/Virus"
import SideBar from "../components/SideBar"
var b

fetch("https://api.covid19api.com/world/total")
        .then(res=>res.json())
        .then(data=> b =  data["TotalConfirmed"]
        )
        
export default function GameScreen() {
    let [clicks, setClicks] = useState(0)
    let [Time, setTime] = useState(0)
    setInterval(() => setTime(performance.now()), 1000)
    return (
        <div className="screen">
            <div className={styles.main}>
                <Virus className={styles.virus} toggle={OnVirusClick}/>
                <ClickCounter clickCount={clicks} clicksToWin={b} time={`Czas: ${Math.floor(Time/1000)}s`}/>
            </div>
            <SideBar/>
  
        </div>   )
    
    function OnVirusClick(e) {
        if (!e.isTrusted) {
            alert("Tak się nie bawimy")
            return
        }
        setClicks(++clicks)
    }

    
        
    }
