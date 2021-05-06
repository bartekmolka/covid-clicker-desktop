import { useState } from "react"
import * as styles from "../styles/ThemeSwitch.module.css"

export default function ThemeSwitch()
{
    const [isDark, setIsDark] = useState();
    return(
        <div className={styles.switch} onClick={() => setIsDark(!isDark)}>
            <link rel="stylesheet" href={isDark ? "/themes/vardark.css" : "/themes/varlight.css"}/>
            <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
        </div>
    )
}