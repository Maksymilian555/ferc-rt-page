import "./style.css";
import logov2 from "../Images/logov2.png"
import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div className="header"> 
            <ul className="nav_list">
                <li className="nav_case">
                    <img src={logov2} alt="logo" className="nav_logo"></img>
                </li>
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