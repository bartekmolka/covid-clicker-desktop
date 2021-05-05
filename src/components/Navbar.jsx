import NavLink from "./NavLink";
import * as styles from "../styles/Navbar.module.css"

export default function Navbar()
{
    return(
        <nav className={styles.main}>
            <ul>
                <NavLink name="Covid clicker" link="/"/>
            </ul>
        </nav>
    )
}