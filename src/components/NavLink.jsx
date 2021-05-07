import * as styles from "../styles/NavLink.module.css"
import {Link} from "react-router-dom"
export default function NavLink(props)
{
    return(
        <li>
            <Link to={props.link} className={styles.links}>
                <h4>
                    {props.name}
                </h4>
            </Link>
        </li>
    )
}