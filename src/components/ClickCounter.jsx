import { useState } from "react"
import * as styles from "../styles/ClickCounter.module.css"

export default function ClickCounter({clickCount, clicksToWin, time})
{
    return(
        <div className={styles.counter}>
            <h1 className={styles.text}>Kliknięto {clickCount} razy</h1>
            <progress className={styles.bar} value={clickCount} max={clicksToWin}>{Math.round((clickCount / clicksToWin) * 100, 2) + "%"}</progress>
            <h5 className={styles.text}>{Math.round((clickCount / clicksToWin) * 100, 2) + "%"}</h5>
            <i className={"fas fa-globe " + styles.earth} style={{backgroundImage: `linear-gradient(180deg, var(--text-color) 0%, var(--text-color) ${Math.round((clickCount / clicksToWin) * 100, 2) + "%"}, var(--primary-color) ${Math.round((clickCount / clicksToWin) * 100, 2) + "%"}, var(--primary-color) 100%)`}}></i>
            <h2 className={styles.text}>{time}</h2>
        </div>
    )
}