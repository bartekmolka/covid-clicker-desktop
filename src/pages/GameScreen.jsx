import { useEffect, useState } from "react"
import * as styles from "../styles/GameScreen.module.css"
import ClickCounter from "../components/ClickCounter"
import Virus from "../components/Virus"
import SideBar from "../components/SideBar"

var b
var c 
const date = new Date()


var valu = "2021-"+date.getMonth()+"-"+date.getDate()
fetch("https://api.covid19api.com/world/total")
        .then(res=>res.json())
        .then(data=> b =  data["TotalConfirmed"]
        )
    fetch("https://api.covid19api.com/total/country/poland/status/confirmed?from="+valu+"T00:00:00Z&to="+valu+"T01:00:00Z")
    .then(res=>res.json())
.then(res=>c =res[0]["Cases"])

export default function GameScreen() {
    let [clicks, setClicks] = useState(0)
    let [Time, setTime] = useState(0)
    setInterval(() => setTime(performance.now()), 1000)
    return (
        <div className="screen">
            <div className={styles.main}>
                <Virus className={styles.virus} toggle={OnVirusClick}/>
                <ClickCounter clickCount={clicks} clicksToWin={c} time={`Czas: ${Math.floor(Time/1000)}s`}/>
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
