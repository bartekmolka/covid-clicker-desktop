import { render } from "@testing-library/react";
import { useState } from "react";
import { nativeTouchData } from "react-dom/cjs/react-dom-test-utils.development";
import { NavLink } from "react-router-dom";
import * as styles from "../styles/ClickCounter.module.css";
import "react-notifications-component/dist/theme.css";
export default function ClickCounter({ clickCount, clicksToWin, time }) {

  return (
    <div className={styles.counter}>
      { clickCount > (Math.round(clicksToWin/2)-10) && clickCount < (Math.round(clicksToWin/2)+10)  ? (<div className={styles.text}>Gratulacje! Liczba twoich kliknięć jest równa połowie nowych zakażeń na Covid-19 w Polsce.</div>) : ("")}

      <h1 className={styles.text}>Kliknięto {clickCount} razy</h1>
      <progress className={styles.bar} value={clickCount} max={clicksToWin}>
        {Math.round((clickCount / clicksToWin) * 100, 2) + "%"}
      </progress>
      <h5 className={styles.text}>
        {Math.round((clickCount / clicksToWin) * 100, 2) + "%"}
      </h5>
      <i
        className={"fas fa-globe " + styles.earth}
        style={{
          backgroundImage:
            `linear-gradient(180deg, var(--text-color) 0%, var(--text-color) ${Math
              .round((clickCount / clicksToWin) * 100, 2) +
              "%"}, var(--primary-color) ${Math.round(
                (clickCount / clicksToWin) * 100,
                2,
              ) + "%"}, var(--primary-color) 100%)`,
        }}
      >
      </i>
      <h2 className={styles.text}>{time}</h2>
    </div>
  );

  }
