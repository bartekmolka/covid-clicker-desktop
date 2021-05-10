import * as styles from "../styles/About.module.css"
import AboutUs from "../components/AboutUs.jsx"


export default function About()
{

    return(
        
        <div className={styles.oNas}>
           <div className={styles.tekst}>
               <div id="1">Autorami tej strony internetowej są: </div>
                <ul id="2">
                    <li>Piotr Nowakowski</li>
                    <li>Bartosz Mółka</li>
                    <li>Bartosz Turczyński</li>
                    <li>Paweł Floryan</li>
                </ul>
                <div id="3"> Jesteśmy uczniami Zespołu Szkół Elektryczno-Mechanicznych im. gen. Józefa Kustronia w Nowym Sączu, klasy IP. Programowanie jest naszą pasją i powodem, dla którego wybraliśmy właśnie ten kierunek. Napisaliśmy tą stronę w
                celu rozwijania swoich kompetencji w tej dziedzinie, oraz lepszego poznania Javascripta i biblioteki React.</div>
                <div id="4">
                    W przypadku wystąpienia na stronie błędów prosimy kontakt:
                </div>
                    <ul id="5">
                        <li>mailowy, na adres <span id="6">B.P.Studio@INT.PL</span>    </li>
                        <li>telefoniczny, na numer <span id="7">+48 602 622 102</span></li>
                    </ul>
                </div>
            
            <AboutUs/>
        
        </div>
    )
}