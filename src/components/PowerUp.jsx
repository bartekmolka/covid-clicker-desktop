import * as styles from "../styles/PowerUp.module.css";

export default function PowerUp({ name, desc, price, multi, photo, canBuy, onBuy })
{
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <img className={styles.photo} src={photo} alt={name} />
                <div className={styles.detailscontainer}>
                    <h2>{name}</h2>
                    <h4>{desc}</h4>
                </div>
                <h1 className={styles.multi}>×{multi}</h1>
            </div>
            <button className={canBuy ? styles.btn : styles.btnd} onClick={onBuy} disabled={!canBuy}>Kup ({price})</button>
        </div>
    )
}