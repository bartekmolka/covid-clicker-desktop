import * as styles from "../styles/GameScreen.module.css"
import Virus from "./Virus"

export default function GameScreen()
{
    return(
        <div className={styles.main}>
            <Virus className={styles.virus} toggle={OnVirusClick}/>
        </div>
    )
    function OnVirusClick(e)
    {
        if(!e.isThrusted) alert("Tak się nie bawimy")
        console.log("klik")
        // TODO: Napisać klikanie wirusa
    }
}