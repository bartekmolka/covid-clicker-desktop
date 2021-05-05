import * as styles from "../styles/NavLink.module.css"

export default function NavLink(props)
{
    return(
        <li>
            <a href={props.link}>
                <h4>
                    {props.name}
                </h4>
            </a>
        </li>
    )
}