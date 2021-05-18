import { useState } from "react";
import { useCookies } from 'react-cookie';
import * as styles from "../styles/ThemeSwitch.module.css";

export default function ThemeSwitch() {
  const [cookies, setCookie, removeCookie] = useCookies(['theme']);
  const [isDark, setIsDark] = useState(cookies['theme']);
  return (
    <div className={styles.switch} onClick={() => {setIsDark(!isDark); setCookie('theme', !isDark);}}>
      <link
        rel="stylesheet"
        href={isDark ? "/themes/vardark.css" : "/themes/varlight.css"}
      />
      <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
    </div>
  );
}
