import { render } from "@testing-library/react"
import { useState } from "react"
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.development"
import { NavLink } from "react-router-dom";
import * as styles from "../styles/ClickCounter.module.css"
import 'react-notifications-component/dist/theme.css'

export default function ClickCounter({clickCount, clicksToWin, time})
{ 
    
      function win () {
       

          
        }
        
        
    return( 
        <div className={styles.counter}>
     {clickCount==clicksToWin ? ( win() ) : ("") }
      
            <h1 className={styles.text}>Kliknięto {clickCount} razy</h1>
            <progress className={styles.bar} value={clickCount} max={clicksToWin}>{Math.round((clickCount / clicksToWin) * 100, 2) + "%"}</progress>
            <h5 className={styles.text}>{Math.round((clickCount / clicksToWin) * 100, 2) + "%"}</h5>
            <i className={"fas fa-globe " + styles.earth} style={{backgroundImage: `linear-gradient(180deg, var(--text-color) 0%, var(--text-color) ${Math.round((clickCount / clicksToWin) * 100, 2) + "%"}, var(--primary-color) ${Math.round((clickCount / clicksToWin) * 100, 2) + "%"}, var(--primary-color) 100%)`}}></i>
            <h2 className={styles.text}>{time}</h2>
        </div>
    )
}