import* as React from "react";
import * as styles from "../styles/AboutUs.module.css";

export default function AboutUs() {

    const we = [

        {
            name: "n00sek",
            picture: "https://avatars.githubusercontent.com/u/74304320",

        },
        {
            name: "piotreknow02",
            picture: "https://avatars.githubusercontent.com/u/65082017",

        },
        {
            name: "bart016",
            picture: "https://avatars.githubusercontent.com/u/81752668",

        },
        {
            name: "OreoPL-studio",
            picture: "https://avatars.githubusercontent.com/u/81591050",

        }


    ]

    return (
        <fieldset className={styles.main}>
        {we.map((x, key) =>
            <a key={key} href={"https://github.com/" + x.name}>
                <div className={styles.devicon} title={x.name}>
                    <img src={x.picture}/>
                </div>

            </a>
        )}

    </fieldset>


    )
}


