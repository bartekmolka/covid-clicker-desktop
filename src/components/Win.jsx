import * as styles from "../styles/Win.module.css"
export default function Win({ score, time }) {
    return (
        <div className={styles.darkener}>

            <div className={styles.scorecontainer}>
                <h2>Gratulacje! Wygrałeś! Pokonałeś koronawirusa lepiej niż Morawiecki!</h2>
                <p>Liczba pokonanych koronawirusów {score}</p>
                <p>Twój czas: {time}s</p>
                <a href=".">
                    <button className={styles.btn}>Zagraj ponownie</button>
                </a>
                
            </div>
        </div>
    )
}