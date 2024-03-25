import "./style.css";
import logo from "../Images/icon.png"
 
const scrollProj = () => {
    const proj = document.getElementById("projects")

    if (proj) {
        proj.scrollIntoView();
    }
}
const scrollGal = () => {
    const proj = document.getElementById("galery")

    if (proj) {
        proj.scrollIntoView();
    }
}
const scrollAbo = () => {
    const proj = document.getElementById("about")

    if (proj) {
        proj.scrollIntoView();
    }
}
const scrollConc = () => {
    const proj = document.getElementById("contact")

    if (proj) {
        proj.scrollIntoView();
    }
}

const Header = (props) => (
    <div className = "header">
        <img src={logo} alt="logo" className = "nav_logo"></img>
        <nav className = "header_nav">
            <ul className = "nav_list">
                <li className = "nav_case">
                    <button 
                    className="nav_button"
                    onClick={ scrollGal }
                    >Galeria</button>                   
                </li>
                <li className = "nav_case">
                    <button 
                    className="nav_button"
                    onClick={ scrollConc }
                    >Kontakt</button>
                </li>
                <li className = "nav_case">
                    <button 
                    className="nav_button"
                    onClick={ scrollAbo }
                    >O nas</button>
                </li>
                <li className = "nav_case">
                    <button
                     className="nav_button"
                     onClick={ scrollProj }
                    >
                        Projekty
                    </button>
                </li>
            </ul>
        </nav>
    </div> 
);

export default Header;