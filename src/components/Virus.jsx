import * as styles from "../styles/Virus.module.css"

export default function Virus({className, toggle})
{
    return(
        <div className={className + " " + styles.viruscontainer} onClick={() => toggle}>
            <img draggable="false" src="/logo.svg" alt="Virus" className={styles.virus}/>
        </div>
    )
}