import "./style.css";
import logo from "../Images/icon.png"

const Header = (props) => (
    <div className = "header">
        <img src={logo} alt="logo" className = "nav_logo"></img>
        <nav className = "header_nav">
            <ul className = "nav_list">
                <li className = "nav_case">
                    <button className="nav_button">Galeria</button>
                </li>
                <li className = "nav_case">
                    <button className="nav_button">Kontakt</button>
                </li>
                <li className = "nav_case">
                    <button className="nav_button">O nas</button>
                </li>
                <li className = "nav_case">
                    <button className="nav_button">Projekty</button>
                </li>
            </ul>
        </nav>
    </div> 
);

export default Header;