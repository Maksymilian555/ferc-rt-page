import "./style.css";
import logo from "../Images/icon.png"
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <img src={logo} alt="logo" className="nav_logo"></img>
            <ul className="nav_list">
                <li className="nav_case">
                    <NavLink
                        to="/StronaGłówna"
                        activeClassName="active"
                        className="nav_button"
                    >Strona Główna</NavLink>
                </li>
                <li className="nav_case">
                    <NavLink
                        to="/Galeria"
                        activeClassName="active"
                        className="nav_button"
                    >Galeria</NavLink>
                </li>
                <li className="nav_case">
                    <NavLink
                        to="/..."
                        activeClassName="active"
                        className="nav_button"
                    >...</NavLink>
                </li>
                <li className="nav_case">
                    <NavLink
                        to="/Sklep"
                        activeClassName="active"
                        className="nav_button"
                    >Sklep</NavLink>
                </li>
            </ul>
        </div>
    );
};
export default Header;