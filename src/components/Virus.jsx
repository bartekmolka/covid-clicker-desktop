import * as styles from "../styles/Virus.module.css"

export default function Virus({className, toggle})
{
    return(
        <div className={className + " " + styles.viruscontainer} onClick={(e) => toggle(e)}>
            <img className={styles.virus} draggable="false" src="/logo.svg" alt="Virus"/>
        </div>
    )
}