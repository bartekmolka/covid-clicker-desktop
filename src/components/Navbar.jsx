import NavLink from "./NavLink";
import * as styles from "../styles/Navbar.module.css"
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar()
{
    return(
        <nav className={styles.main}>
            <div className={styles.burger}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
            </div>  
            <ul className={styles.list}>
                <NavLink name="Covid clicker" link="/"/>
                <NavLink name="O nas" link="/"/>
                <NavLink name="Kontakt" link="/Kontakt.html"/>
                <ThemeSwitch/>
            </ul>
            
            {/* Piotrek wstaw tu logo */}
        </nav>
    )
}