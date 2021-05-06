import NavLink from "./NavLink";
import * as styles from "../styles/Navbar.module.css"

export default function Navbar()
{
    return(
        <nav className={styles.main}>
            <div className={styles.burger}>
                    <div classname={styles.line1}></div>
                    <div classname={styles.line2}></div>
                    <div classname={styles.line3}></div>
            </div>  
            <ul className={styles.list}>
                <NavLink name="Covid clicker" link="/"/>
                <NavLink name="O nas" link="/"/>
                <NavLink name="Kontakt" link="/"/>
            </ul>
            
            {/* Piotrek wstaw tu logo */}
        </nav>
    )
}